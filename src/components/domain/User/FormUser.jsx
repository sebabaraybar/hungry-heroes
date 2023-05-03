import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid, RadioGroup, FormControl, Radio, FormControlLabel, Box, Typography } from '@mui/material';
import ROUTES_ENUM from '../../../enums/routesEnum';
import CTextField from '../../ui/form/CTextField';
import CButton from '../../ui/Button/CButton';

import styles from './FormUser.module.scss';

const FormUser = function () {

	const VALIDATION = Yup.object().shape({
		username: Yup.string()
			.email('Usuario inválido - usuario@email.com')
			.required('Campo obligatorio'),
		password: Yup.string().required('Campo obligatorio')
			.min(8, 'Debe contener al menos 8 caracteres')
			.max(20, 'Debe contener un máximo de 20 caracteres'),
		confirmPassword: Yup.string()
		.required('Campo obligatorio')
		.min(8, 'Debe contener al menos 8 caracteres')
		.max(20, 'Debe contener un máximo de 20 caracteres')
		.oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
		userType: Yup.string().required('Campo obligatorio')
	});

	const onSubmit = () => {
		alert("llama al servicio createUser");
		window.location.href = ROUTES_ENUM.AUTH_LOGIN;
	}

	return (
		<Box className={styles.container}>
			<Typography className={styles.title} mb={3}>Completá los datos y unite a la liga hambrienta</Typography>
			<Formik
				initialValues={{
					username: '',
					password: '',
					confirmPassword: '',
					userType: ''
				}}
				validationSchema={VALIDATION}
				onSubmit={onSubmit}
				// innerRef={formikRef}
			>
				{(formik) => (
					<Form>
						<Grid
							container
							rowSpacing={4}
							alignContent="center"
							alignItems="center"
							justifyContent="center"
							justifyItems="center"
						>
							<Grid item xs={12}>
								<CTextField
									label="Usuario"
									name="username"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
									label="Contraseña"
									name="password"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
									label="Repetir contraseña"
									name="confirmPassword"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl component="fieldset" className={styles.error}>
									<RadioGroup 
										name='userType'
										value={formik.values.userType}
										onChange={formik.handleChange}
										className={styles.radiobtncontainer}
										error={formik.touched.userType && Boolean(formik.errors.userType)}
									>
										<FormControlLabel
											value="customer"
											label="Quiero vender"
											control={ <Radio /> }
										/>
										<FormControlLabel
											value="business"
											label="Quiero comprar"
											control={ <Radio /> }
										/>
									</RadioGroup>
									<ErrorMessage
										name="userType"
										className={styles.error}
									/>

								</FormControl>
							</Grid>
							<Grid item xs={12} mt={4} textAlign='center'>
									<CButton
										type="submit"
										title="Crear usuario"
										sx={{fontSize: '1.2rem'}}
									/>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default FormUser;
