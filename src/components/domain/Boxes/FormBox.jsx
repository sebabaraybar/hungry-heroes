import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from "@mui/material";
import CTextField from "../../ui/form/CTextField";

const FormBox = function ({
	onSubmit,
	formikRef,
	initialValues
}) {

	const VALIDATION = Yup.object().shape({
		name: Yup.string().required('Campo obligatorio'),
		detail: Yup.string().required('Campo obligatorio'),
		price: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio'),
		quantity: Yup.number().typeError('Ingresar solo números').required('Campo obligatorio')
	});

	// useEffect(() => {
  //   if (userId) {
  //     setLoading(true);
  //     UsersService.getSingleUser(userId).then((response) => {
  //       formikRef.current.setValues(response);
  //       setLoading(false);
  //     })
  //       .catch((error) => {
  //         setSnackbar(isAuth(handleError(error)));
  //         setLoading(false);
  //       });
  //   }
  // }, []);

	useEffect(() => {
		formikRef.current.setValues({
			name: initialValues.name || '',
			detail: initialValues.detail || '',
			price: initialValues.price || null,
			quantity: initialValues.quantity || null,
			published: initialValues.published || false
		});
	}, [formikRef, initialValues]);

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
							name="detail"
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
							name="quantity"
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
	initialValues: PropTypes.objectOf(PropTypes.any)
};

FormBox.defaultProps = {
	initialValues: {}
};

export default FormBox;