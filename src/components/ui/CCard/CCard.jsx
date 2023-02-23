import React from "react";
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import styles from './CCard.module.scss';
const CCard = function ({
	title,
	subtitle,
	description,
	alt,
	logo
}) {
	return (
		<Box className={styles.container}>
			<Card 
				sx={{ maxWidth: 250}}
			>
				<CardMedia
					sx={{height: 50}}
					image= {logo}		
					alt={alt}
				/>
				<CardContent>
					<Typography
						variant="h2"
						fontSize="1.5rem"
						mt={3}
						mb={1}
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
						fontSize="0.8rem"
					>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button>Comprar</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

CCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	alt: PropTypes.string.isRequired,
	logo: PropTypes.node.isRequired
};

CCard.defaultProps = {
	subtitle: null,
	description: null
}

export default CCard;