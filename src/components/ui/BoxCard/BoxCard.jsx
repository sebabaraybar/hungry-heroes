import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import ROUTES_ENUM from "../../../enums/routesEnum";
import CIconButton from "../Button/CIconButton";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Grid, Divider } from "@mui/material";
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import CButton from "../Button/CButton";
import { InfoRounded } from "@mui/icons-material";
import CSelect from '../Select/CSelect';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from './BoxCard.module.scss';
import UploadImg from "../UploadImg/UploadImg";

const BoxCard = function ({

	title,
	description,
	stock,
	price,
	alt,
	img,
	onEdit,
	onDelete,
	onBuy,
	userType,
	activeProfile,
	onSubmit,
	formikRef
}) {

	const navigate = useNavigate();
	const[options, setOptions] = useState([]);

	const VALIDATION = Yup.object().shape({
		quantity: Yup.number().required('Campo obligatorio')
	});

	const formik = useFormik({
		initialValues: { quantity:''},
		validationSchema: VALIDATION,
		// onSubmit: onSubmit,
		onSubmit: onBuy,
		innerRef: formikRef
	});

	useEffect(() => {
		const stockOptions = [];
		for (let i = 1; i <= stock; i++) {
			stockOptions.push({
				key: i,
				label: i.toString()
			});
		}
		setOptions(stockOptions);
	}, [stock]);

	const formatPrice = (price) => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	};
	
	const formattedPrice = formatPrice(price);

	return (
		<Box className={styles.container}>
			<Card className={styles.card}>
				<CardMedia
					className={styles.img}
					image={img}		
					alt={alt}
				/>
				<CardContent className={styles.cardcontent}>
					<Typography className={styles.cardtitle}
					>
						{title}
					</Typography>
					<Grid container mt={3} columnSpacing={6}>
						<Grid item xs={12}>
							<Typography className={styles.carddescription}>
								{description}
							</Typography>
						</Grid>
							{userType === "Business" ? (
								<>
								<Grid item xs={12} mx={6} mt={2}>
								<Typography mt={2} className={styles.carddetails}>
									${formattedPrice}
								</Typography>
								</Grid>
								<Grid item xs={12} mx={6} mt={2}>
									<Typography className={styles.stock}>
										stock: <span>{stock}</span>
									</Typography>
								</Grid>
								<Grid item xs={6}>
								<UploadImg />
							</Grid>
								</>
							):(
								<>
								<Grid item xs={6}>
								<Typography mt={6} className={styles.carddetails}>
									${formattedPrice}
								</Typography>
								</Grid>
								<Grid item xs={6} mt={6}>
									<CSelect
										name="quantity"
										label="cantidad"
										formik={formik}
										selectOption={options}
									>
									</CSelect>
							</Grid>
								</>
							)}
					</Grid>
				</CardContent>
				<CardActions className={styles.btncontainer}>
					{userType === "Business" ? (
						<>
						<CIconButton
							icon={ <EditRounded />}
							title="Editar"
							onClick={() => onEdit()}
						/>
						<CIconButton
							icon={ <DeleteRounded />}
							title="Eliminar"
							onClick={() => onDelete()}
						/>
						</>
					):
						<CButton
							title="Comprar"
							sx={{fontSize: '1.1rem'}}
							// onClick={(values) => onBuy(values)}
							onClick={formik.handleSubmit} 

						/>
					}
				</CardActions>
				{(userType === "Business" && !activeProfile) ? (
					<>
					<Box className={styles.state}>
						<Typography>sin publicar</Typography>
					<CIconButton
					icon={<InfoRounded />}
					size="large"
					title="Completá tu perfil y los boxes serán publicados"
					onClick={() => navigate(ROUTES_ENUM.PROFILE)}
					/>
					</Box>
					</>
				): null}
			</Card>
		</Box>
	);
};

BoxCard.propTypes = {

	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	alt: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	onBuy: PropTypes.func,
	userType: PropTypes.string.isRequired,
	activeProfile: PropTypes.bool
};

BoxCard.defaultProps = {
	description: null,
	onEdit: null,
	onDelete: null,
	onBuy: null,
	activeProfile: false
}

export default BoxCard;