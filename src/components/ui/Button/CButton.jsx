import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@mui/material";

const CButton = function ({
	fullWidth,
	type,
	title,
	startIcon,
	endIcon,
	onClick,
	color,
	size,
	variant,
	disabled,
	// component,
	// children,
	sx,
	disableFocusRipple,
	disableRipple
}) {
	return (
		<Button
			fullWidth={fullWidth}
			type={type}
			color={color}
			size={size}
			variant={variant}
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			disabled={disabled}
			sx={sx}
			disableFocusRipple={disableFocusRipple}
			disableRipple={disableRipple}
		>
			{title}
		</Button>
	);
};

CButton.propTypes = {
	fullWidth: PropTypes.bool,
	type: PropTypes.oneOf(['submit', 'button', 'reset']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'success', 'error', 'warning', 'info']),
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
	startIcon: PropTypes.element,
	endIcon: PropTypes.element,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	sx: PropTypes.oneOf(PropTypes.any),
	onClick: PropTypes.func,
	disableFocusRipple: PropTypes.bool,
	disableRipple: PropTypes.bool
};

CButton.defaultProps = {
	fullWidth: false,
	type: 'button',
	size: 'small',
	color: 'secondary',
	variant: 'outlined',
	startIcon: null,
	endIcon: null,
	title: null,
	disabled: false,
	sx: null,
	onClick: () => null,
	disableFocusRipple: false,
	disableRipple:false
};

export default CButton;
