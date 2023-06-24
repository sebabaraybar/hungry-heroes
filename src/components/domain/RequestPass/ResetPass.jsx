import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import MasterCard from "../../layout/MasterCard/MasterCard";
import CTextField from "../../ui/form/CTextField";
import CButton from "../../ui/Button/CButton";
import { Grid, Typography } from "@mui/material";
import * as Yup from 'yup';
import { useLocation } from "react-router-dom";

const ResetPass = function ({token}) {

	const VALIDATION = Yup.object().shape({
		password: Yup.string().required('Campo obligatorio')
			.min(8, 'Debe contener al menos 8 caracteres')
			.max(20, "Debe contener un máximo de 20 caracteres"),
		confirmPassword: Yup.string().required('Campo obligatorio')
		.oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
	});

	console.log(token)

	const onSave = ({ token, password, confirmPassword }) => {
		alert("llama al servicio ResetPass")
	}

	return (
		<MasterCard
			headerTitle="Crear una nueva contraseña"
		>
			<Formik
				initialValues={{
					password: '',
					confirmPassword: ''
				}}
				validationSchema={ VALIDATION }
				onSubmit={onSave}
				>
				{(formik) => (
					<Form>
						<Grid container rowSpacing={3}>
							{/* <Grid item xs={12}>
								<CTextField
									required
									label="Usuario"
									name="username"
									disabled
									formik={formik}
									// value={userLogged.username}
									// variant="standard"
								/>
							</Grid> */}
							<Grid item xs={12}>
								<CTextField
									label="Nueva contraseña"
									name="password"
									type="password"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
									label="Repetir nueva contraseña"
									name="newPassword"
									type="password"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12} mt={6}>
								<CButton
									type="submit"
									title="Guardar contraseña"
									variant="outlined"
									color="secondary"
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

export default ResetPass;