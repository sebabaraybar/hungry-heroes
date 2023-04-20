import React from "react";
import { Formik, Form } from "formik";
import MasterCard from "../../layout/MasterCard/MasterCard";
import CTextField from "../../ui/form/CTextField";
import CButton from "../../ui/Button/CButton";
import { Grid } from "@mui/material";

const ChangePass = function () {
	return (
		<MasterCard 
				headerTitle="Cambiar contraseña"
				headerSubtitle="Error 404"
				footerBtnIcon="kdsjnkfgs"
				// onClick={() => }
			>
				<Formik
					initialValues={{
						currentPassword: '',
						newPassword: '',
						confirmPassword: ''
					}}
					// validationSchema={}
					// onSubmit={onSave}
					>
					{(formik) => (
						<Form>
							<Grid container rowSpacing={3}>
								<Grid item xs={12}>
									<CTextField
										required
										label="Usuario"
										name="username"
										disabled
										formik={formik}
										// value={userLogged.username}
										// variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<CTextField
										label="Contraseña actual"
										name="currentPassword"
										type="password"
										formik={formik}
									/>
								</Grid>
								<Grid item xs={12}>
									<CTextField
										label="Nueva contraseña"
										name="newPassword"
										type="password"
										formik={formik}
									/>
								</Grid>
								<Grid item xs={12}>
									<CTextField
										label="Repetir nueva contraseña"
										name="confirmPassword"
										type="password"
										formik={formik}
									/>
								</Grid>
								<Grid item xs={12}>
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

export default ChangePass;