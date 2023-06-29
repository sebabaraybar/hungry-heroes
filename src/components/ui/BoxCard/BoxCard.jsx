import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import ROUTES_ENUM from "../../../enums/routesEnum";
import CIconButton from "../Button/CIconButton";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import CButton from "../Button/CButton";
import { InfoRounded } from "@mui/icons-material";
import CSelect from '../Select/CSelect';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from './BoxCard.module.scss';

const BoxCard = function ({
	key,
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
	activeProfile
}) {

	const navigate = useNavigate();
	const VALIDATION = Yup.object().shape({
		stock: Yup.string().required('Campo obligatorio').nullable,
		});
	const formik = useFormik({
		initialValues: {
			stock: {stock}
		},
		validationSchema: VALIDATION,
		onSubmit: values => {
			// Handle form submission if needed
			console.log(values)
		}
	});
const[options, setOptions] = useState([]);
	console.log(stock)
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

	return (
		<Box className={styles.container} key={key}>
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
						<Grid item xs={8}>
							<Typography mt={2} className={styles.carddetails}>
								${price}
							</Typography>
						</Grid>
						<Grid item xs={4} mt={2}>
							{userType === "Business" ? (
								<Typography>
									stock: {stock}
								</Typography>
							): (
								<CSelect
									name="stock"
									label="cantidad"
									formik={formik}
									selectOption={options}
								>
								</CSelect>
							)}
						</Grid>
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
							onClick={() => onBuy()}
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
	key: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	alt: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onBuy: PropTypes.func.isRequired,
	userType: PropTypes.string.isRequired,
	activeProfile: PropTypes.bool.isRequired
};

BoxCard.defaultProps = {
	description: null,
	onEdit: null,
	OnDelete: null,
	onBuy: null
}

export default BoxCard;