import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField, FormHelperText,FormControl } from '@mui/material';
import FORMIK_PROPTYPES from '../../../modelsFormik/FormikProps';

const CAutocomplete = function ({
	name,
	label,
	disabled,
	variant,
	formik,
	options,
	onInputChange,
	required,
	size,
	fullWidth,
	margin,
	freeSolo
}) {
	const [fieldValue, setFieldValue] = useState(null);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
    if (freeSolo && !inputValue) {
      setInputValue(formik.values[name]);
    }
    if (!freeSolo && !fieldValue) {
      const formikValue = formik.values[name];
      const initialOption = options.find((item) => item.key === formikValue);
      setFieldValue(initialOption);
    }
  }, [options, formik.values[name]]);

	return (
		<FormControl
			fullWidth={fullWidth}
			margin={margin}
		>
			<Autocomplete
				clearText='Borrar'
				id={name}
				name={name}
				value={fieldValue}
				onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        variant={variant}
        size={size}
        freeSolo={freeSolo}
        onChange={(event, newValue) => {
          setFieldValue(newValue);
          formik.setFieldValue(name, newValue !== null
            ? newValue.key
            : formik.initialValues.name);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          if (freeSolo) {
            formik.setFieldValue(name, newInputValue !== null
              ? newInputValue
              : formik.initialValues.name);
          }
          setInputValue(newInputValue);
          onInputChange(newInputValue);
        }}
        disabled={disabled}
        options={options}
        getOptionLabel={(option) => option.label?.toString()}
				renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant={variant}
            required={required}
            autoComplete="off"
          />
        )}
			/>
			<FormHelperText
			 error={formik.touched[name] && Boolean(formik.errors[name])}
			 sx={{ margin: '0.5rem 0' }}
		 >
			 {formik.touched[name] && formik.errors[name]}
			</FormHelperText>
		</FormControl>
	);
};

CAutocomplete.propTypes = {
	name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
  formik: PropTypes.shape(FORMIK_PROPTYPES),
  options: PropTypes.array.isRequired,
	onInputChange: PropTypes.func,
  required: PropTypes.bool,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  size: PropTypes.oneOf(['small', 'medium']),
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'normal', 'dense']),
  freeSolo: PropTypes.bool
};

CAutocomplete.defaultProps = {
	disabled: false,
	variant: 'standard',
	formik: null,
	onInputChange: () => (null),
	required: false,
	size: 'small',
	fullWidth: true,
	margin: 'none',
	freeSolo: false
};

export default CAutocomplete;
