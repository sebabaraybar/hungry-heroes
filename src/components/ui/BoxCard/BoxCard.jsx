import React from "react";
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, IconButton } from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import styles from './BoxCard.module.scss';

const BoxCard = function ({
	key,
	title,
	description,
	alt,
	logo,
	id,
	onEdit,
	onDelete,
	icon
}) {
	return (
		<Box className={styles.container} key={key}>
			<Card className={styles.card}>
				<CardMedia
					className={styles.logocontainer}
					image= {logo}		
					alt={alt}
				/>
				<CardContent>
					<Typography
						variant="h2"
						fontSize="1.5rem"
						my={1}
						align="center"
					>
						{title}
					</Typography>
					<Typography
						fontSize="0.7rem"
					>
						{description}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: "center"}}>
					<IconButton>
						<EditOutlined 
							// aria-label="Editar"
							title= "Editar"
							onClick={() => onEdit(id)}
						/>
					</IconButton>
					<IconButton
						// aria-label="Eliminar"
						title="Eliminar"
            onClick={() => onDelete(id)}
					>
						<DeleteOutline/>	
					</IconButton>
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
	logo: PropTypes.node.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

BoxCard.defaultProps = {
	description: null,
	onEdit: null,
	OnDelete: null
}

export default BoxCard;