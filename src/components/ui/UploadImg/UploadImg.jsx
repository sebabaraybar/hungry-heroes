import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FORMIK_PROPTYPES from '../../../modelsFormik/FormikProps';
import { Box, Fab, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const UploadImg = function({
	formik,
	name,
	disabled,
	updateImg,
	img
}) {

	const [selectedImg, setSelectedImg] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
		setSelectedImg(acceptedFiles);
		updateImg(acceptedFiles);
	}, [updateImg]);
	const {
		getRootProps,
		getInputProps
	} = useDropzone({
		onDrop,
		accept: {
			'img/jpeg': [],
			'img/png': []
		},
		maxFiles: 1
	});

	return (
		<>
			{/* <input
				type='file' 
				accept='image/*'
				name={name}
				disabled={disabled}
				value={formik.values[name]}
				onChange={(e) => (formik.handleChange(e))}
				onBlur={(e) => (formik.handleBlur(e))}
				helperText={(formik.touched[name] && formik.errors[name])}
				error={(formik.touched[name] && Boolean(formik.errors[name]))}			
			/>
			<label  htmlFor="contained-button-file">
        <Fab component="span">
					<AddPhotoAlternate />
				</Fab>
			</label> */}
			<Box>
				{img ? (
					<img
						src={img && URL.createObjectURL(img)}
						alt=""
					/>
				) : (
					<Box
					{...getRootProps()}
					>
						<input  
						  {...getInputProps()}
							htmlFor="contained-button-file"
							// error={(formik.touched[name] && Boolean(formik.errors[name]))}
						/>
							<Fab component="span">
								<AddPhotoAlternate />
							</Fab>
					</Box>
				)}
			</Box>
		</>
	);
};

UploadImg.propTypes = {
	name: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	formik: PropTypes.shape(FORMIK_PROPTYPES),
	updateImg: PropTypes.func.isRequired,
	img: PropTypes.objectOf(PropTypes.any)
};

UploadImg.defaultProps = {
	disabled: false,
	formik: null,
	img: null
}

export default UploadImg;