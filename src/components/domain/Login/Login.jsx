import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import CTextField from '../../ui/form/CTextField';
// import MButton from 'components/ui/Button/MButton';
import {
  Box, Paper, Typography, Divider, Grid, InputAdornment, Button
} from '@mui/material';
import { PersonOutlined, LockOutlined } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import ROUTES_ENUM from 'enums/routesEnum';
// import AuthService from 'services/AuthService';
// import UserService from 'services/UserService';
import styles from './Login.module.scss';

const Login = function () {
  // const navigate = useNavigate();

  const validation = Yup.object().shape({
    username: Yup.string().email('Usuario inválido - usuario@email.com').required('Campo obligatorio'),
    password: Yup.string().required('Campo obligatorio')
  });

  const onLogin = async ({ username, password }) => {
    // eslint-disable-next-line no-console
    console.log(`USER: ${username}`, `PASS: ${password}`);
    // TODO implementación del login - token

    // try {
    //   const userLogged = await AuthService.login(username, password);
    //   localStorage.setItem('token', userLogged.token);
    //   const me = await UserService.me();
    //   localStorage.setItem('userLogged', JSON.stringify(me));
    //   // setLoading(false); TODO
    //   if (me.firstLogin) {
    //     navigate(ROUTES_ENUM.AUTH_RESTORE_PASS);
    //     return;
    //   }
    //   navigate(ROUTES_ENUM.HOME);
    //   return;
    // } catch (error) {
    //   // eslint-disable-next-line no-console
    //   console.log(error);
    //   // TODO CS
    // }
  };

  return (
    <Box className={styles.container}>
      <Paper
        elevation={2}
        className={styles.card}
      >
        <Box className={styles.logocontainer}>
          <img
            // src={logo}
            alt="Logo Pena & Asociados"
          />
        </Box>
        <Typography
          variant="title"
          sx={{ mt: 3 }}
        >
          Proyecto Istea
        </Typography>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={validation}
          onSubmit={onLogin}
        >
          <Form>
            <Grid
              container
              rowSpacing={3}
              sx={{ my: 2 }}
            >
              <Grid item xs={12}>
                <CTextField
                  label="Usuario"
                  size="small"
                  fullWidth
                  name="username"
                  required
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlined />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CTextField
                  label="Contraseña"
                  size="small"
                  fullWidth
                  name="password"
                  required
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                      >
                        <LockOutlined />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        <Divider
          sx={{ mt: 3, mb: 2 }}
        />
        <Typography>
          {/* TODO CS link va a pantalla que indica envío de mail, no a restore */}
          {/* <Link to={ROUTES_ENUM.AUTH_RESTORE_PASS} className={styles.link}>
            ¿Olvidaste contraseña?
            {' '}
            <Typography
              variant="important"
            >
              Recuperala
            </Typography>
          </Link> */}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
