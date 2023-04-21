import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, List, ListItemText, Menu } from '@mui/material';
import CButton from '../../ui/Button/CButton';
import ROUTES_ENUM from '../../../enums/routesEnum';
import { getHome } from '../../../utils/navUtils';
import logo from '../../../media/logo.png'
import styles from './Header.module.scss';
// import { ExitToAppRounded, LockRounded, ManageAccountsRounded } from '@mui/icons-material';

const Header = function () {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

	const handleClose = () => {
    setAnchorEl(null);
  };

	const onLogout = () => {
		// AuthService.logout();
		navigate(ROUTES_ENUM.AUTH_LOGIN);
	};

  return (
		<AppBar
			position="static"
			className={styles.container}
		>
			<Toolbar className={styles.toolbar}>
				<Box className={styles.logoContainer}>
					<Link to={ getHome() }>
					<img
						alt="Logo de Hungry Heroes"
						src={logo}
						className={styles.logo}
					/>
					</Link>
				</Box>
				<Box>
					<CButton
						onClick={handleClick}
						variant="outlined"
						color="secondary"
						title="menú"
						sx={{fontSize: "2rem"}}
					/>
					<Menu
						open={open}
						onClose={handleClose}
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						transformOrigin={{
							horizontal: 'right',
							vertical: 'top'
						}}
						classes={{ paper: styles['menu-paper'] }}
					>
				{/* {getItemsForRol().map((item) => (
					<MenuItem
						key={item.key}
						className={location.pathname === item.link ? styles.navItemActive : styles.navItem }
						onClick={() => navigate(item.link)}
					>
						<Typography>{item.label}</Typography>
					</MenuItem>
		 	))} */}
						<List>
							<ListItemText sx={{ textAlign: 'left'}} >
								<CButton
									variant="text"
									color="secondary"
									title="Perfil"
									// startIcon={<ManageAccountsRounded />}
									sx={{ fontSize: '1.3rem'}}
									// onClick={}
								/>
							</ListItemText>
							<ListItemText sx={{ textAlign: 'left'}}>
								<CButton
									variant="text"
									color="secondary"
									title="Cambiar contraseña"
									sx={{ fontSize: '1.3rem'}}
									// startIcon={ <LockRounded /> }
									onClick={() => navigate(ROUTES_ENUM.AUTH_CHANGE_PASS)}
								/>
							</ListItemText>
							<ListItemText sx={{ textAlign: 'left'}}>
								<CButton
									variant="text"
									color="secondary"
									title="Cerrar sesión"
									sx={{ fontSize: '1.3rem'}}
									// startIcon={ <ExitToAppRounded /> }
									onClick={onLogout}
								/>
							</ListItemText>
						</List>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
  );
};

export default Header;
