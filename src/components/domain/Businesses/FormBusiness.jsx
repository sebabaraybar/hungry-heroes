import React, {  useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import businessList from '../../../business.json';
import { Grid, Typography } from '@mui/material';
import CTextField from '../../ui/form/CTextField';
import CButton from '../../ui/Button/CButton';
import { Box } from '@mui/material';
import styles from './FormBusiness.module.scss';

const FormBusiness = function({
	formTitle,
	activeProfile
}) {

	const formikRef = useRef();
	const [disabledField, setdisabledField] = useState(true);
	const [enableBtn, setEnableBtn] = useState(false);

	const handleChange = () => {
		setEnableBtn(true);
	};

	const handleEdit = () => {
		setdisabledField(false);
	};

	const handleCancel = () => {
		formikRef.current.setValues(formikRef.current.initialValues);
		setdisabledField(true);
		setEnableBtn(false);
	};
	
	const onSubmit = () => {
		if(activeProfile) {
			alert("llama al servicio updateProfile");
		} else {
			alert("llama al servicio createProfile");
		}
		setdisabledField(true);
		setEnableBtn(false);
	};

	return(
		<Box className={styles.container}>
			<Typography className={styles.title}>{activeProfile ? "Editar perfil" : "Completar perfil"}</Typography>
			<Formik
				initialValues={{
					username: 'salvaje@info.com.ar',
					name: '',
					realName: '',
					slogan: '',
					description: '',
					logo: null,
					address: '',
					postalCode: '',
					district: '',
					cuit: '',
					cbu: '',
					web: '',
					active: false
				}}
				// validationSchema={VALIDATION}
				onSubmit={onSubmit}
				innerRef={formikRef}
			>
				{(formik) => (
					<Form onChange={handleChange}>
						<Grid container columnSpacing={5} rowSpacing={5}>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Nombre de fantasía"
									name="name"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Razón social"
									name="realName"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Slogan"
									name="slogan"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Descripción"
									name="description"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={4}>
								<CTextField
									disabled={disabledField}
									label="Dirección"
									name="address"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={4}>
								<CTextField
									disabled={disabledField}
									label="Código postal"
									name="postalCode"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={4}>
								{/* Cambiar por select */}
								<CTextField
									disabled={disabledField}
									label="Barrio"
									name="postalCode"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="CUIT"
									name="cuit"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="CBU"
									name="cbu"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Web"
									name="web"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled
									label="E-mail"
									name="username"
									formik={formik}
								/>
							</Grid>
							<Box  className={styles.btncontainer}>
								{(!enableBtn && (
									<CButton
										title="editar"
										sx={{fontSize: '1.2rem'}}
										onClick={handleEdit}
									/>
								))}
								{(enableBtn) && (
									<>
									<CButton
										title="Cancelar"
										sx={{fontSize: '1.2rem'}}
										onClick={handleCancel}
									/>
									<CButton
										title="Guardar cambios"
										variant="contained"
										sx={{fontSize: '1.2rem'}}
										onClick={onSubmit}
									/>
								</>
								)}
							</Box>
						</Grid>
					</Form>
				)}
			</Formik>

		</Box>
	);
};

export default FormBusiness;