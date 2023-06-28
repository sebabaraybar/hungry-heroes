import React, {  useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography } from '@mui/material';
import CTextField from '../../ui/form/CTextField';
import CAutocomplete from '../../ui/Select/CAutocomplete';
import CButton from '../../ui/Button/CButton';
import { Box } from '@mui/material';
// import UploadImg from '../../ui/UploadImg/UploadImg';
import DISTRICT_ENUM from '../../../enums/districtEnum';
import { makeOptionsObject } from '../../../utils/utils';
import styles from './FormBusiness.module.scss';
import BusinessService from '../../../services/BusinessService';

const FormBusiness = function({
	business,
	businessEmail,
	accountId
}) {

	const formikRef = useRef();
	const [disabledField, setdisabledField] = useState(true);
	const [enableBtn, setEnableBtn] = useState(false);
	// TODO
	// const [selectedImage, setSelectedImage] = useState();
	
	const VALIDATION = Yup.object().shape({
		fantasyName: Yup.string().required('Campo obligatorio'),
		businessName: Yup.string().required('Campo obligatorio'),
		slogan: Yup.string().required('Campo obligatorio'),
		description: Yup.string().required('Campo obligatorio'),
	// 	// logo
		address: Yup.string()
  .required('Campo obligatorio'),
	postalCode: Yup.string()
  .required('Campo obligatorio')
  .matches(/^[0-9]{4}$/, 'El código postal debe contener 4 números'),
	location: Yup.string().required('Campo obligatorio'),
	// cuit: Yup.string()
  // .required('Campo obligatorio')
  // .matches(/^\d{2}-\d{8}-\d{1}$/, 'El CUIT debe tener el formato 00-00000000-0'),
	cuit: Yup.string()
  .required('Campo obligatorio')
  .matches(/^[0-9]{11}$/, 'El CUIT debe contener 11 números sin guiones'),
	alias: Yup.string()
  .required('Campo obligatorio')
  .matches(/^([a-zA-Z]{1}\.?){6,20}$/, 'El ALIAS debe tener entre 6 y 20 letras. Puede contener puntos'),
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


	//  TODO upload imágenes ************

	// const updateImg = (selectedImage) => {
	// 	console.log(selectedImage[0])
	// 	const formData = new FormData();
	// 	formData.append('file', selectedImage[0]);
	// 	console.log(formData, "TESTTTTT")
	// 	// console.log(formData)
	// 	setSelectedImage(formData);
	// 	console.log(selectedImage)
	// 	console.log(formikRef)

	// 	//llamar al servicio
	// }
	// useEffect(() => {
	// 	console.log(selectedImage)
	// },[selectedImage]);

	// const handleUpload = (e) => {
	// 	let file = e.target.files[0];
	// 	const reader = new FileReader();
	// 	let url = reader.readAsDataURL(file);

	// 	reader.onloadend = function(e) {
	// 		setSelectedImage(reader.result);
	// 	}
	// }
	//  ************
	
	const handleSubmit = (values) => {
		console.log(values)
		BusinessService.editBusiness(business.userBusinessId, values, accountId)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})		
		setdisabledField(true);
		setEnableBtn(false);
	
	//  TODO upload imágenes ************
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
	//  ************
	};

	return(
		<Box className={styles.container}>
			<Typography className={styles.title}>
				{business.activeProfile ? "Editar perfil" : "Completar perfil"}
			</Typography>
			<Formik
				initialValues={{
					email: businessEmail,
					fantasyName: business.fantasyName || '',
					businessName: business.businessName || '',
					slogan: business.slogan || '',
					description: business.description || '',
					// logo: '',
					address: business.address || '',
					postalCode: business.postalCode || '',
					location: business.location || '',
					cuit: business.cuit || '',
					alias: business.alias || '',
					web: business.web || ''
				}}
				validationSchema={VALIDATION}
				onSubmit={handleSubmit}
				innerRef={formikRef}
				validateOnMount
			>
				{(formik) => (
					<Form onChange={handleChange}>
						<Grid container columnSpacing={5} rowSpacing={5}>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Nombre de fantasía"
									name="fantasyName"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Razón social"
									name="businessName"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
								  multiline
									disabled={disabledField}
									label="Slogan"
									name="slogan"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
								  multiline
									disabled={disabledField}
									label="Descripción"
									name="description"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={12}>
								<CTextField
									disabled={disabledField}
									label="Dirección"
									name="address"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CTextField
									disabled={disabledField}
									label="Código postal"
									name="postalCode"
									formik={formik}
								/>
							</Grid>
							<Grid item xs={6}>
								<CAutocomplete
									disabled={disabledField}
									label="Barrio"
									name="location"
									formik={formik}
									options={makeOptionsObject(DISTRICT_ENUM, 'label', 'key')}
									value={{ label: formik.values.location, value: formik.values.location }}

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
									label="Alias"
									name="alias"
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
									name="email"
									formik={formik}
								/>
							</Grid>
							{/*// TODO upload imágenes */}
							{/* <Grid item xs={6}>
								<UploadImg
									name='logo'
									// disabled={disabledField}
									formik={formik}
									// onChange={(event) => {
									// 	formik.setFieldValue("file", event.currentTarget.files[0]);
									// }}
									onChange={(event) => {
										formik.setFieldValue("file", selectedImage);
									}}
									// onChange={handleUpload}
									updateImg={updateImg}
                  img={selectedImage}
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
									  type="submit"
										title="Guardar cambios"
										variant="contained"
										sx={{fontSize: '1.2rem'}}
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