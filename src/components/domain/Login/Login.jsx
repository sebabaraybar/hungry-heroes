import React, { useEffect, useRef } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import CTextField from '../../ui/form/CTextField';
import CButton from '../../ui/Button/CButton';
import { Box, Grid, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ROUTES_ENUM from '../../../enums/routesEnum';
import logo from '../../../media/logo.png';
import styles from './Login.module.scss';
import AuthService from '../../../services/AuthService';
import { LOCAL_STORAGE } from '../../../utils/constants';
import useLoading from '../../../hooks/useLoading';
import { getHome } from '../../../utils/navUtils';

const Login = function () {
  const navigate = useNavigate();
	const formikRef = useRef();
	const setLoading = useLoading();

  const VALIDATION = Yup.object().shape({
    email: Yup.string().email('Usuario inválido - usuario@email.com').required('Campo obligatorio'),
    password: Yup.string().required('Campo obligatorio')
  });

	const onLogin = ({ email, password }) => {
		setLoading(true);
		AuthService.login(email, password)
			.then((userLogged) => {
				localStorage.setItem(LOCAL_STORAGE.TOKEN_LOGIN, userLogged.jwtToken);
				localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, userLogged.email);
				localStorage.setItem(LOCAL_STORAGE.USER_ROLE, userLogged.role);
				localStorage.setItem(LOCAL_STORAGE.ACCOUNT_ID, userLogged.id);
				localStorage.setItem(LOCAL_STORAGE.BUSINESS_ID, userLogged.userBusinessId);
				
				navigate(getHome(userLogged.role));
			})
			.catch((error) => {
				console.log(error);
			});
			setLoading(false);
	};

  return (
    <Box className={styles.container}>
      <Box
        elevation={2}
        className={styles.logincontainer}
      >
				<Box className={styles.logocontainer}>
					<img src={logo} alt="" />
				</Box>
        <Formik
				initialValues={{
					email: '',
					password: ''
				}}
          validationSchema={VALIDATION}
          onSubmit={onLogin}
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
                  name="email"
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
              <Grid item xs={12} mt={4}>
                <CButton
                  type="submit"
									title="Ingresar"
									sx={{fontSize: '1.2rem'}}
                />
              </Grid>
            </Grid>
          </Form>
				)}
        </Formik>
				<Box className={styles.linkcontainer}>
					<Box className={styles.linkpass}>
						<CButton
							title="Olvidé mi contraseña"
							variant="text"
							sx={{fontSize:"0.9rem"}}
							onClick={() => navigate(ROUTES_ENUM.AUTH_REQUEST_PASS)}
						/>
					</Box>
					<Box className={styles.linkaccount}>
						<CButton 
							title='Creá tu cuenta'
							variant='contained'
							sx={{fontSize: '1.4rem'}}
							onClick={() => navigate(ROUTES_ENUM.CREATE_ACCOUNT)}
						/>
					</Box>
				</Box>
      </Box>
			<Box className={styles.imgcontainer}>
				<Box className={styles.btncontainer}>
					<CButton
						title="Sobre nosotros"
						variant="text"
						sx={{ fontSize: '2.2rem' }}
						onClick={() => navigate(ROUTES_ENUM.ABOUT)}
					/>
				</Box>
			</Box>
    </Box>
  );
};

export default Login;
