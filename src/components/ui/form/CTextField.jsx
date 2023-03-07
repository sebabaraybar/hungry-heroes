import React, { useState } from "react";
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined, LockOutlined } from '@mui/icons-material';
import { useField } from "formik";

const CTextField = function ({
  name,
  fullWidth,
  variant,
  // ...other,
  label,
  disabled,
  type,
  size,
  placeholder,
  autocomplete,
  InputProps
}) {
  const [field, meta] = useField(name);
  // const config = {
  //   fullWidth:{fullWidth},
  //   variant:{variant},
  //   other:{...other},
  //   ...field,
  //   label: {label},
  //   disabled:{disabled},
  //   type:{type},
  //   size:{size},
  //   placeholder:{placeholder},
  //   autocomplete:{autocomplete},
  //   InputProps:{type === 'password' ? inputPropsPass : InputProps}
  // };
  const [isPassVisible, setPassVisibility] = useState(false);
  const setPassFieldType = () => {
    if (isPassVisible) { return 'text'; }
    return 'password';
  };
  const inputPropsPass = {
    // disableUnderline: true,
    // startAdornment: (
    //   <InputAdornment
    //     position="start"
    //   >
    //     <LockOutlined />
    //   </InputAdornment>
    // ),
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => {
            setPassVisibility(!isPassVisible);
          }}
        >
          {
            isPassVisible ? <VisibilityOffOutlined />
              : <VisibilityOutlined />
          }
        </IconButton>
      </InputAdornment>
    )
  };

  // if (meta && meta.touched && meta.error) {
  //   config.error = true;
  //   config.helperText = meta.error;
  // }

  return (
    // <TextField { ...config }/>
    <TextField
    fullWidth={fullWidth}
    variant={variant}
    // other={...other}
    name={field}
    label= {label}
    disabled={disabled}
    type={type === 'password' ? setPassFieldType() : type}
    size={size}
    placeholder={placeholder}
    autocomplete={autocomplete}
    InputProps={type === 'password' ? inputPropsPass : InputProps}
    error={meta.touched[name] && Boolean(meta.errors[name])}
      helperText={meta.touched[name] && meta.errors[name]}
    />
  );
};

CTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  // color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['text', 'password', 'number']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  // formik: PropTypes.shape(FORMIK_PROPTYPES).isRequired,
  // sx: PropTypes.objectOf(PropTypes.any),
  // InputProps: PropTypes.objectOf(PropTypes.any)
}

export default CTextField;
