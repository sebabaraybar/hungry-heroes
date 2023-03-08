import React from "react";
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, IconButton } from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";
import styles from './BoxCard.module.scss';

const BoxCard = function ({
	title,
	description,
	alt,
	logo,
	btnTitle
}) {
	return (
		<Box className={styles.container}>
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
				<CardActions
				sx={{ justifyContent: "center"}}
					
				>
					<IconButton
						aria-label="Eliminar"
            // onClick={onDelete}
					>
						<DeleteOutline />
						
						</IconButton>
						<IconButton>

						<Edit
							aria-label="Editar"
							// onClick={onEdit}
						/>
						</IconButton>

				</CardActions>
			</Card>
		</Box>
	);
};

BoxCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	alt: PropTypes.string.isRequired,
	logo: PropTypes.node.isRequired,
	btnTitle: PropTypes.node.isRequired
};

BoxCard.defaultProps = {
	description: null
}

export default BoxCard;