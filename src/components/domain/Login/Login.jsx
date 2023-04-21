import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CTextField from '../../ui/form/CTextField';
import CButton from '../../ui/Button/CButton';
import { Box, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ROUTES_ENUM from '../../../enums/routesEnum';
import logo from '../../../media/logo.png';
import styles from './Login.module.scss';

const Login = function () {
  const navigate = useNavigate();
	const formikRef = useRef();

  const VALIDATION = Yup.object().shape({
    username: Yup.string().email('Usuario inválido - usuario@email.com').required('Campo obligatorio'),
    password: Yup.string().required('Campo obligatorio')
  });

  const onLogin = async ({ username, password }) => {
    console.log(`USER: ${username}`, `PASS: ${password}`);
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
					username: '',
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
									variant="standard"
                  label="Usuario"
                  name="username"
									formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <CTextField
									variant="standard"
                  label="Contraseña"
                  name="password"
                  type="password"
									formik={formik}
                />
              </Grid>
							<Box className={styles.linkpass}>
								<CButton
									title="Olvidé mi contraseña"
									variant="text"
									color="primary"
									sx={{fontSize:"0.8rem"}}
									onClick={() => navigate(ROUTES_ENUM.AUTH_RESTORE_PASS)}
								/>
							</Box>
              <Grid item xs={12} mt={4}>
                <CButton
                  type="submit"
                  variant="contained"
									color="secondary"
									title="Ingresar"
									sx={{fontSize: '1.2rem'}}
                />
              </Grid>
            </Grid>
          </Form>
				)}
        </Formik>
        <Box className={styles.linkaccount}>
					<CButton 
						title='Creá tu cuenta'
						variant='outlined'
						color="secondary"
						sx={{fontSize: '1.4rem'}}
						onClick={() => navigate(ROUTES_ENUM.CREATE_ACCOUNT)}
					/>
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
