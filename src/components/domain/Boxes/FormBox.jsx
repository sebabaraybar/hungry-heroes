import React from "react";
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid } from "@mui/material";
import CTextField from "../../ui/form/CTextField";

const FormBox = function ({
	onSubmit, formikRef
}) {

	const VALIDATION = Yup.object().shape({
		name: Yup.string().required('Campo obligatorio'),
		detail: Yup.string().required('Campo obligatorio'),
		price: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio'),
		quantity: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio')
	});

	return (
		<Formik
			initialValues={{
				name: '',
				detail: '',
				price: null,
				quantity: null,
				published: false
			}}
			validationSchema={VALIDATION}
			onSubmit={onSubmit}
			innerRef={formikRef}
		>{(formik) => (

			<Form>
				<Grid container columnSpacing={1} rowSpacing={2}>
					<Grid item xs={12} >
						<CTextField
							label="Nombre"
							name="name" // atributo del back
							formik={formik}
						/>
					</Grid>
					<Grid item xs={12}>
						{/* hay que poner contador de caracteres  */}
						<CTextField
							multiline
							label="Descripción"
							name="detail" // atributo del back
							formik={formik}
						/>
					</Grid>
					<Grid item xs={6}>
						<CTextField
							label="Precio"
							name="price" // atributo del back
							formik={formik}
						/>
					</Grid>
					<Grid item xs={6}>
						<CTextField
							label="Cantidad"
							name="quantity" // atributo del back
							formik={formik}
						/>
					</Grid>
				</Grid>
			</Form>
		)}
		</Formik>
	);
};

FormBox.propTypes = {
  formikRef: PropTypes.objectOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormBox;