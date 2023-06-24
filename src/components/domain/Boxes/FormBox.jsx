import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from "@mui/material";
import CTextField from "../../ui/form/CTextField";
import BusinessService from "../../../services/BusinessService";

const FormBox = function ({
	onSubmit,
	formikRef,
	initialValues,
	businessId
}) {

	const VALIDATION = Yup.object().shape({
		name: Yup.string().required('Campo obligatorio'),
		detail: Yup.string().required('Campo obligatorio'),
		price: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio'),
		quantity: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio')
	});

	const onSubmitForm = (values) => {
		onSubmit(values);
	};

	// useEffect(() => {
  //   if (businessId) {
  //     // setLoading(true);
  //     BusinessService.getBusinessById(businessId)
	// 		.then((response) => {
  //       formikRef.current.setValues(response);
	// 			console.log(formikRef.current.initialValues)
	// 			console.log(businessId)
  //       // setLoading(false);
  //     })
  //       .catch((error) => {
  //         // setSnackbar(isAuth(handleError(error)));
  //         // setLoading(false);
	// 				console.log(error)
  //       });
  //   }
  // }, []);

  

	// useEffect(() => {
	// 	formikRef.current.setValues({
	// 		name: initialValues.name || '',
	// 		description: initialValues.description || '',
	// 		price: initialValues.price || null,
	// 		stock: initialValues.stock || null,
	// 		published: initialValues.published || false
	// 	});
	// }, [formikRef, initialValues]);

	return (
		<Formik
			initialValues={{
				name: '',
				description: '',
				price: null,
				stock: null,
				published: false
			}}
			// initialValues={initialValues}
			validationSchema={VALIDATION}
			onSubmit={onSubmitForm}
			innerRef={formikRef}
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