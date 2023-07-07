import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import useSnackbar from '../../../hooks/useSnackbar';

const UploadImg = function({
	// formik,
	// name,
	// disabled,
	updateImg,
}) {

	const [selectedImg, setSelectedImg] = useState();
	const setSnackbar = useSnackbar();

	const onDrop = useCallback((acceptedFile) => {
		if(acceptedFile.length === 0) {
			setSnackbar('Solo podés cargar una(1) imagen');
			return;
		}
		setSelectedImg(acceptedFile[0]);
		updateImg(acceptedFile[0]);
	}, []);
	
	const {
		getRootProps,
		getInputProps
	} = useDropzone({
		onDrop,
		accept: {
			'image/jpeg': ['.jpg', '.jpeg'],
			'image/png': ['.png'],
			// 'image/svg+xml': ['.svg']
		},
		maxFiles: 1
	});

	return (
		<Grid {...getRootProps()}>
			<input {...getInputProps()}/>
			<Box>
				<Typography>Agregar archivo</Typography>
			</Box>
			{selectedImg && (
				<Box>
					{/* <img src={selectedImg}></img> */}
					<Typography>{selectedImg.path}</Typography>
				</Box>
			)}
		</Grid>
	);
};

UploadImg.propTypes = {
	updateImg: PropTypes.func.isRequired
};

export default UploadImg;