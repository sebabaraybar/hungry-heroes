import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import ROUTES_ENUM from "../../../enums/routesEnum";
import CIconButton from "../Button/CIconButton";
import { Box, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import styles from './BoxCard.module.scss';
import CButton from "../Button/CButton";
import { InfoRounded } from "@mui/icons-material";

const BoxCard = function ({
	key,
	title,
	description,
	quantity,
	price,
	alt,
	img,
	onEdit,
	onDelete,
	onBuy,
	userType,
	published
}) {

	const navigate = useNavigate();

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
					<Typography>
						{description}
					</Typography>
					<Typography mt={2} className={styles.carddetails}>
						${price}
					</Typography>
					{userType === "Business" ? (
						<Typography className={styles.carddetails}>
							stock: {quantity}
						</Typography>
					): null}
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
				{(userType === "Business" && !published) ? (
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
	published: PropTypes.bool.isRequired
};

BoxCard.defaultProps = {
	description: null,
	onEdit: null,
	OnDelete: null,
	onBuy: null
}

export default BoxCard;