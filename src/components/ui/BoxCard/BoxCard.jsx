import React from "react";
import PropTypes from 'prop-types';
import CIconButton from "../Button/CIconButton";
import { Box, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import CIconButton from "../Button/CIconButton";
import { Box, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { EditRounded, DeleteRounded } from "@mui/icons-material";
import styles from './BoxCard.module.scss';

const BoxCard = function ({
	key,
	title,
	description,
	alt,
	img,
	id,
	onEdit,
	onDelete
}) {
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
				</CardContent>
				<CardActions className={styles.btncontainer}>
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
				</CardActions>
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
};

BoxCard.defaultProps = {
	description: null,
	onEdit: null,
	OnDelete: null
}

export default BoxCard;