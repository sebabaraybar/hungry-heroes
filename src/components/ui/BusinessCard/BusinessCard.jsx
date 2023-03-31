import React from "react";
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import CButton from "../Button/CButton";
import styles from './BusinessCard.module.scss';
const BusinessCard = function ({
	title,
	subtitle,
	description,
	alt,
	logo
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
						variant="h3"
						fontSize="1rem"
						mb={2}
						align="center"
					>
						{subtitle}
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
					<CButton
						title="Ver boxes"
						onClick={() => alert("redirecciona a página de boxes del comercio")}
					/>
				</CardActions>
			</Card>
		</Box>
	);
};

BusinessCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	alt: PropTypes.string.isRequired,
	logo: PropTypes.node.isRequired
};

BusinessCard.defaultProps = {
	subtitle: null,
	description: null
}

export default BusinessCard;