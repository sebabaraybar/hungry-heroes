import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from "@mui/material";
import CTextField from "../../ui/form/CTextField";

const FormBox = function ({
	onSubmit,
	formikRef,
	box,
	values
}) {

	const VALIDATION = Yup.object().shape({
		name: Yup.string().required('Campo obligatorio'),
		description: Yup.string().required('Campo obligatorio'),
		price: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio'),
		stock: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio')
	});

	const onSubmitForm = (values) => {
		onSubmit(values);
	};

	return (
		<Formik
			initialValues={box || {}}
			validationSchema={VALIDATION}
			onSubmit={onSubmitForm}
			innerRef={formikRef}
			validateOnChange
		>
			{(formik) => (
			<Form>
				<Grid container columnSpacing={1} rowSpacing={2}>
					<Grid item xs={12} >
						<CTextField
							label="Nombre"
							name="name"
							formik={formik}
						/>
					</Grid>
					<Grid item xs={12}>
						{/* hay que poner contador de caracteres  */}
						<CTextField
						  multiline
							label="Descripción"
							name="description"
							formik={formik}
						/>
					</Grid>
					<Grid item xs={6}>
						<CTextField
							label="Precio"
							name="price"
							formik={formik}
						/>
					</Grid>
					<Grid item xs={6}>
						<CTextField
							label="Cantidad"
							name="stock"
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
  onSubmit: PropTypes.func.isRequired,
	// initialValues: PropTypes.objectOf(PropTypes.any),
	userId: PropTypes.number
};

FormBox.defaultProps = {
	// initialValues: {},
	userId: undefined
};

export default FormBox;