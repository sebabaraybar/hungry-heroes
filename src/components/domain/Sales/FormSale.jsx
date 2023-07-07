import React from "react";
import PropTypes from 'prop-types';
import { Box, Grid } from "@mui/material";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CTextField from "../../ui/form/CTextField";
import FORMIK_PROPTYPES from "../../../modelsFormik/FormikProps";

const FormSale = function({
	onSubmit,
	formikRef
}) {

	const VALIDATION = Yup.object().shape({
		cardNumber: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio'),
		cardHolder: Yup.string().required('Campo obligatorio'),
		expirationDate: Yup.string()
  .required('Campo obligatorio')
  .matches(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Ingresar dd/mm/aaaa'),
	cvv: Yup.number().typeError('Ingresar solo números')
  .required('Campo obligatorio')
	});

	return(
		<Formik
		initialValues= {{
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
    }}
		validationSchema={VALIDATION}
		onSubmit={onSubmit}
		innerRef={formikRef}
		validateOnMount
		>
			{(formik) => (
				<Form>
          <Box>
						<Grid container rowSpacing={2} columnSpacing={6} mb={6}>
							<Grid item xs={12}>
								<CTextField
									fullWidth
									name="cardNumber"
									label="Número de tarjeta"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
									fullWidth
									name="cardHolder"
									label="Titular"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									fullWidth
									name="expirationDate"
									label="Expiración (dd/mm/aaaa)"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									fullWidth
									name="cvv"
									label="Código de seguridad"
									formik={formik}
								/>
							</Grid>
						</Grid>
      		</Box>
				</Form>
			)}
		</Formik>
	);
};

FormSale.propTypes = {
  formikRef: PropTypes.objectOf(FORMIK_PROPTYPES).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormSale;