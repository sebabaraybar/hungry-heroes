import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Avatar, Stack, Divider,
  Box, IconButton, Typography
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../../media/logo.png';
import styles from './Header.module.scss';

const Header = function () {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const userLocal = localStorage.getItem('userLogged');
  // const user = JSON.parse(userLocal);
	const user = {
		name: "Ana",
		lastname: "Doe"
	}

  const headerUsername = () => {
    const name = user.name.substring(0, 1);
    const lastname = user.lastname.substring(0, 1);
    return `${name}${lastname}`;
  };

  // const goToItem = (path) => {
  //   navigate(path);
  // };

  // const onLogout = () => {
  //   AuthService.logout();
  //   navigate(ROUTES_ENUM.AUTH_LOGIN);
  // };

  return (
    <Stack
      direction="row"
      className={styles.container}
    >
      <Box className={styles.logoContainer}>
        <img
          alt="logo"
          src={logo}
          className={styles.logo}
        />
      </Box>
      <Box className={styles.actionsContainer}>
        <Box className={styles.navigation}>
          {/* {getItemsForRol().map((item) => (
            <Box
              key={item.key}
              className={location.pathname === item.link ? styles.navItemActive : styles.navItem}
              onClick={() => goToItem(item.link)}
            >
              <Typography variant="body2">
                {item.label}
              </Typography>
            </Box>
          ))} */}
					<NavLink to='/' activeClassname={styles.active}>Navlink</NavLink>
					<NavLink to='/'>Navlink</NavLink>
					<NavLink to='/'>Navlink</NavLink>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            marginX: '0.5rem',
            height: '30px',
            width: '3px'
          }}
          className={styles.divider}
        />
        <Box className={styles.user}>
          <Avatar
            sx={{
              color: (theme) => theme.palette.primary.light,
              backgroundColor: (theme) => theme.palette.secondary.main,
							marginX: '0.5rem'
            }}
          >
            {headerUsername()}
          </Avatar>
          <Box className={styles.userData}>
            <Typography variant="body2">
              {user.name}
              {' '}
              {user.lastname}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            // onClick={onLogout}
            disableRipple
          >
            <LogoutIcon
              sx={{
                fontSize: '16px',
                color: (theme) => theme.palette.primary.light
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
