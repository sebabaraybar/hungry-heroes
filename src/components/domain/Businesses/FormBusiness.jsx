import React, {  useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography } from '@mui/material';
import CTextField from '../../ui/form/CTextField';
import CSelect from '../../ui/Select/CSelect';
import CButton from '../../ui/Button/CButton';
import { Box } from '@mui/material';
import UploadImg from '../../ui/UploadImg/UploadImg';
import DISTRICT_ENUM from '../../../enums/districtEnum';
import { makeOptionsObject } from '../../../utils/utils';
import styles from './FormBusiness.module.scss';

const FormBusiness = function({
	formTitle,
	activeProfile
}) {

	const formikRef = useRef();
	const [disabledField, setdisabledField] = useState(true);
	const [enableBtn, setEnableBtn] = useState(false);
	const [selectedImage, setSelectedImage] = useState();

	const VALIDATION = Yup.object().shape({
		name: Yup.string().required('Campo obligatorio'),
		realName: Yup.string().required('Campo obligatorio'),
		slogan: Yup.string().required('Campo obligatorio'),
		description: Yup.string().required('Campo obligatorio'),
	// 	// logo
		address: Yup.string()
  .required('Campo obligatorio'),
	postalCode: Yup.string()
  .required('Campo obligatorio')
  .matches(/^[0-9]{4}$/, 'El código postal debe contener 4 números'),
	district: Yup.string().required('Campo obligatorio'),
	cuit: Yup.string()
  .required('Campo obligatorio')
  .matches(/^\d{2}-\d{8}-\d{1}$/, 'El CUIT debe tener el formato 00-00000000-0'),
	cbu: Yup.string()
  .required('Campo obligatorio')
  .matches(/^([a-zA-Z]{1}\.?){6,20}$/, 'El CBU debe tener entre 6 y 20 letras. Puede contener puntos'),
	web: Yup.string()
  .url('Ejemplo: https://www.negocio.com/')
  .required('Campo obligatorio')
	});

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

	// const handleUpload = (e) => {
	// 	let file = e.target.files[0];
	// 	const reader = new FileReader();
	// 	let url = reader.readAsDataURL(file);

	// 	reader.onloadend = function(e) {
	// 		setSelectedImage(reader.result);
	// 	}
	// 	console.log("TESTTTTT")
	// 	console.log(file);
	// }
	
	const onSubmit = () => {
	// 	console.log(formikRef.current.values.logo)
	// 	const formData = new FormData();
  // Object.keys(formikRef.current.values).forEach((key) => {
  //   if (key === 'logo') {
  //     const value = formikRef.current.values[key];
  //     const blob = value instanceof File
  //       ? new Blob([value], { type: value.type })
  //       : value;
  //     formData.append(key, blob, value.name);
  //   } else {
  //     formData.append(key, formikRef.current.values[key]);
  //   }
  // });
		if(activeProfile) {
			alert("llama al servicio updateProfile");
		} else {
			alert("llama al servicio createProfile");
		}
		console.log(formikRef.current.values);
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
					logo: '',
					address: '',
					postalCode: '',
					district: '',
					cuit: '',
					cbu: '',
					web: '',
					active: false,
				}}
				validationSchema={VALIDATION}
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
								<CSelect
									disabled={disabledField}
									label="Barrio"
									name="district"
									formik={formik}
									selectOption={makeOptionsObject(DISTRICT_ENUM, 'label', 'key')}
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
							{/* <Grid item xs={6}>
								<UploadImg
									name='logo'
									// disabled={disabledField}
									formik={formik}
									onChange={(event) => {
										formik.setFieldValue("file", event.currentTarget.files[0]);
									}}
									// onChange={handleUpload}
								/>
							</Grid> */}
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
										onClick={formik.handleSubmit}
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