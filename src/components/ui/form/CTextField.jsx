import React, { useState } from "react";
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import FORMIK_PROPTYPES from "../../../modelsFormik/FormikProps";

const CTextField = function ({
  name,
  label,
  disabled,
  type,
  size,
	color,
  placeholder,
  autocomplete,
  sx,
  InputProps,
	helperText,
	error,
	formik
}) {

	const [isPassVisible, setPassVisibility] = useState(false);
  
	const setPassFieldType = () => {
		console.log(isPassVisible)
    if (isPassVisible) { return 'text'; }
    return 'password';
  };
  
	const inputPropsPass = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          disableRipple
          onClick={() => {
            setPassVisibility(!isPassVisible);
          }}
        >
          {
            isPassVisible ? <VisibilityOutlined />
              : <VisibilityOffOutlined />
          }
        </IconButton>
      </InputAdornment>
    )
  };

  return (
    <TextField
    fullWidth
		multiline
    name={name}
    label= {label}
		color={color}
    disabled={disabled}
    type={type === 'password' ? setPassFieldType() : type}
    size={size}
    placeholder={placeholder}
    autocomplete={autocomplete}
		value={formik.values[name]}
		onChange={(e) => (formik.handleChange(e))}
		onBlur={(e) => (formik.handleBlur(e))}
    InputProps={type === 'password' ? inputPropsPass : InputProps}
		sx={sx}
		helperText={(formik.touched[name] && formik.errors[name])}
		error={(formik.touched[name] && Boolean(formik.errors[name]))}
    />
  );
};

CTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'number']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  formik: PropTypes.shape(FORMIK_PROPTYPES),
  sx: PropTypes.objectOf(PropTypes.any),
  InputProps: PropTypes.objectOf(PropTypes.any),
	helperText: PropTypes.string,
	error: PropTypes.bool
};

CTextField.defaultProps = {
	color: 'primary',
	disabled: false,
	type: 'text',
	size: 'small',
	placeholder: null,
	autoComplete: 'off',
	formik: null,
	sx: null,
	InputProps: null,
	helperText: 'Error',
	error: false
};

export default CTextField;
