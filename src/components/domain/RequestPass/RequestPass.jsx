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


const RequestPass = function () {
	const formikRef = useRef();
	const navigate = useNavigate();

	const VALIDATION = Yup.object().shape({
		username: Yup.string()
			.email('Usuario inválido')
			.required('Campo obligatorio')
	});

	const onSubmit = ({ username }) => {
		alert("Llama al servicio requestPass")
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
					username: ''
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
									name='username'
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