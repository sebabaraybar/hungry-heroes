import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CTextField from '../../ui/form/CTextField';
import {
  Box, Typography, Divider, Grid, InputAdornment, Button
} from '@mui/material';
import { PersonOutlined, LockOutlined } from '@mui/icons-material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ROUTES_ENUM from '../../../enums/routesEnum';
import logo from '../../../media/logo.png';
import styles from './Login.module.scss';

const Login = function () {
  // const navigate = useNavigate();
	const formikRef = useRef();

  const VALIDATION = Yup.object().shape({
    username: Yup.string().email('Usuario inválido - usuario@email.com').required('Campo obligatorio'),
    password: Yup.string().required('Campo obligatorio')
  });

  // const onLogin = async ({ username, password }) => {
  //   console.log(`USER: ${username}`, `PASS: ${password}`);
  // };

  return (
    <Box className={styles.container}>
      <Box
        elevation={2}
        className={styles.card}
      >
        <Typography
          variant="title"
          sx={{ mt: 12 }}
        >
          NOMBRE DE LA APP
        </Typography>
        <Formik
				initialValues={{
					username: '',
					password: ''

				}}
          validationSchema={VALIDATION}
          // onSubmit={onLogin}
					innerRef={formikRef}
        >
					{(formik) => (
          <Form>
            <Grid
              container
              rowSpacing={3}
              sx={{ my: 2 }}
            >
              <Grid item xs={12}>
                <CTextField
                  label="Usuario"
                  name="username"
									formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <CTextField
                  label="Contraseña"
                  name="password"
                  type="password"
									formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                >
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Form>
				)}
        </Formik>
        <Divider
          sx={{ mt: "auto", mb: 2 }}
        />
        <Typography variant='caption'>
          <Link to={ROUTES_ENUM.AUTH_RESTORE_PASS} className={styles.link}>
            Olvidé mi contraseña
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
