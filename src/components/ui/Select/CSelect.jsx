import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, MenuItem, FormHelperText, FormControl } from '@mui/material';
import FORMIK_PROPTYPES from '../../../modelsFormik/FormikProps';
import vars from '../../../styles/variables.scss';

const CSelect = function ({
	name,
	label,
	size,
	selectOption,
	formik,
	disabled,
	fullWidth,
	variant
}) {
	return (
		<FormControl
			fullWidth={fullWidth}
			size={size}
			disabled={disabled}
		>
			<InputLabel
				style={{
          color: formik.touched[name]
          && formik.errors[name]
            ? vars.error : null
        }}
			>
				{label}
			</InputLabel>
			<Select
				fullWidth
				variant={variant}
				value={formik.values[name]}
				label={label}
				name={name}
				onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
			>
				{selectOption.map((option) => (
          <MenuItem key={option.key} value={option.key}>{option.label}</MenuItem>
        ))}
			</Select>
			<FormHelperText
        error={formik.touched[name] && Boolean(formik.errors[name])}
      >
        {formik.touched[name] && formik.errors[name]}
      </FormHelperText>
		</FormControl>
	);
};

CSelect.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	selectOption: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
	formik: PropTypes.shape(FORMIK_PROPTYPES).isRequired,
  disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

CSelect.defaultProps = {
	size: 'small',
	selectOption: null,
	disabled: false,
	fullWidth: true,
	variant: 'standard'
};

export default CSelect;