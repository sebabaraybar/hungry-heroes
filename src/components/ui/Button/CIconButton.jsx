import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';

const CIconButton = function ({
	title,
	onClick,
	color,
	size,
	variant,
	disabled,
	icon,
	edge,
	disableRipple,
	disableFocusRipple,
	sx,
	children
}) {
const renderIcon = () => {
	let iconNew = null;
	if(title) {
		iconNew = (<Tooltip title={title}>{icon}</Tooltip>);
	} else{
		iconNew = icon;
	}
	return iconNew;
};

	return (
		<IconButton
			color={color}
			size={size}
			variant={variant}
			onClick={onClick}
			disabled={disabled}
			sx={sx}
			edge={edge}
			disableRipple={disableRipple}
			disableFocusRipple={disableFocusRipple}
		>
			{renderIcon()}
			{children}
		</IconButton>
	);
};

CIconButton.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'success', 'error', 'warning', 'info']),
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
	edge: PropTypes.oneOf(['end', 'start']),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	title: PropTypes.string,
	icon: PropTypes.element,
	sx: PropTypes.any,
	disableRipple: PropTypes.bool,
	disableFocusRipple: PropTypes.bool,
	children: PropTypes.node, 
};

CIconButton.defaultProps = {
	size: 'small',
	color: 'primary',
	variant: 'contained',
	disabled: false,
	onClick: () => null,
	title: null,
	icon: null,
	sx: null,
	edge: 'start',
	disableFocusRipple: false,
	disableRipple: false,
	children: null
};

export default CIconButton;
