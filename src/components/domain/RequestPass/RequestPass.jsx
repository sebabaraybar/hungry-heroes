import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MasterCard from '../../layout/MasterCard/MasterCard';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import CTextField from '../../ui/form/CTextField';
import CButton from '../../ui/Button/CButton';
import { ArrowBackRounded } from '@mui/icons-material';
import ROUTES_ENUM from '../../../enums/routesEnum';
import AuthService from '../../../services/AuthService';
import useSnackbar from '../../../hooks/useSnackbar';


const RequestPass = function () {
	const formikRef = useRef();
	const navigate = useNavigate();
	const setSnackbar = useSnackbar();

	const VALIDATION = Yup.object().shape({
		email: Yup.string()
			.email('Usuario inválido')
			.required('Campo obligatorio')
	});

	const onSubmit = ({ email}) => {
		AuthService.requestPass(email)
		.then((response) => {
			console.log(response)
			navigate(ROUTES_ENUM.AUTH_REQUEST_PASS_CONFIRMATION);
		})
		.catch((error) => {
			console.log(error)
			setSnackbar({message: error.message, severity: 'error'});
		})
	};

	return (
		<MasterCard
			logoComponent
			headerTitle="Recuperar contraseña"
			headerSubtitle="Ingresá tu email y te enviaremos un enlace para recuper tu contraseña"
			footerComponent
			footerBtnTitle='Volver'
			footerBtnIcon={ <ArrowBackRounded /> }
			onClick={() => navigate(ROUTES_ENUM.AUTH_LOGIN)}
		>
			<Formik
				initialValues={{
					email: ''
				}}
				validationSchema={ VALIDATION }
				onSubmit={onSubmit}
				innerRef={formikRef}
			>
				{(formik) => (
					<Form>
						<Grid container rowSpacing={3}>
							<Grid item xs={12}>
								<CTextField
									label='Email'
									name='email'
									required
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12} mt={6}>
								<CButton
								type="submit"
								title="Recuperar contraseña"
								sx={{fontSize: '1.2rem'}}
								/>

							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</MasterCard>
	);
};

export default RequestPass;