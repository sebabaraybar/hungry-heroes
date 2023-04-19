import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import AuthService from '../../../../services/AuthService';
import ROUTES_ENUM from '../../../../enums/routesEnum';
import { useNavigate } from 'react-router-dom';
import { Menu, Box, MenuItem, MenuList } from '@mui/material';
import CIconButton from '../../../ui/Button/CIconButton';
import CButton from '../../../ui/Button/CButton';
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, LockOutlined, LogoutOutlined } from '@mui/icons-material';

const UserMenu = function ({
	children,
	openMenuIcon,
	closeMenuIcon
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const onLogout = () => {
		// AuthService.logout();
		navigate(ROUTES_ENUM.AUTH_LOGIN);
	};

	const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	return(
		<Box sx={{backgroundColor:'red'}}>
			<CIconButton
				onClick={handleClick}
				icon={open ? closeMenuIcon : openMenuIcon}
			/>
			<Menu
				open={open}
				onClose={handleClose}
				anchoEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					horizontal: 'right',
					vertical: 'top'
				}}
				sx={{ marginTop: '1rem' }}
			>
				{children}
				<MenuList sx={{backgroundColor: 'red'}}>
					<MenuItem>
						<CButton
							variant="text"
							title="Cambiar contraseña"
							color="secondary"
							startIcon={ <LockOutlined /> }
							onClick={() => navigate(ROUTES_ENUM.AUTH_CHANGE_PASS)}
						/>
					</MenuItem>
					<MenuItem>
						<CButton
							variant="text"
							title="Cerrar sesión"
							color="secondary"
							startIcon={ <LogoutOutlined /> }
							onClick={onLogout}
						/>
					</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
};

UserMenu.propTypes = {
  children: PropTypes.any,
  openMenuIcon: PropTypes.element,
  closeMenuIcon: PropTypes.element
};

UserMenu.defaultProps = {
  children: null,
  openMenuIcon: <KeyboardArrowDownOutlined />,
  closeMenuIcon: <KeyboardArrowUpOutlined />
};

export default UserMenu;
