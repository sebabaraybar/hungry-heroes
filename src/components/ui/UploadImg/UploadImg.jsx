import React from 'react';
import PropTypes from 'prop-types';
import FORMIK_PROPTYPES from '../../../modelsFormik/FormikProps';
import { Fab } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';

const UploadImg = function({
	formik,
	name,
	disabled
}) {
	return (
		<>
			<input
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
			</label>
		</>
	);
};

UploadImg.propTypes = {
	name: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	formik: PropTypes.shape(FORMIK_PROPTYPES)
};

UploadImg.defaultProps = {
	disabled: false,
	formik: null
}

export default UploadImg;