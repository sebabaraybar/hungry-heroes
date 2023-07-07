import axios from 'axios';
import useSnackbar from '../hooks/useSnackbar';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUM from '../enums/routesEnum';
const API_BASE_URL = 'https://hungry-heroes.azurewebsites.net';

const getHeaders = () => {
	const token = localStorage.getItem('jwtToken');
	if(token) {
		return {Authorization: `Bearer ${token}`};
	}
	return undefined;
};

let setSnackbarCallback;
export const setSnackbar = (callback) => {
	setSnackbarCallback = callback; // Assign the setSnackbar function to the variable
};

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: getHeaders()
});

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('jwtToken');

		if(token) {
			config.headers.Authorization = `Bearer ${token}`;
		} else {
			config.headers.Authorization = undefined;
		}
		return config;
	},
	(err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => {
    if (res && res.data && res.headers['content-type'].includes('application/json')) {
      return Promise.resolve(res.data);
    }

    return Promise.resolve(res);
  },
  (error) => {
    let errorHook;
    if (error && error.message === 'Network Error') {
      localStorage.clear();
      errorHook = { code: 'SERVER_OFF', message: 'Server apagado' };
      return Promise.reject(errorHook);
    }

    // Caso que se quedo sin session al llamar a un recurso
    // if (error && error.response && error.response.status === 401 && !error.response.data) {
    //   localStorage.clear();
    //   errorHook = { code: 'NO_SESSION', message: 'Sin sesión' };
    //   return Promise.reject(errorHook);
    // }
		

		if(error && error.response && error.response.status === 401 && error.response.data && error.response.data.message === 'Unauthorized') {
			localStorage.clear();
			errorHook = {code: 'NO_SESSION', message: 'La sesión ha expirado'};
			const navigate = useNavigate();
			setSnackbarCallback({ message: 'Tu sesión expiró. Por favor, volvé a ingresar', severity: 'error' });

			setTimeout(() => {
        navigate(ROUTES_ENUM.AUTH_LOGIN);
      }, 2000);
			// navigate(ROUTES_ENUM.AUTH_LOGIN);
			return Promise.reject(errorHook);
		}

    // Respondio el servidor con error
    if (error && error.response) {
      const errorAfter = { ...error.response.data };
      return Promise.reject(errorAfter);
    }

    return Promise.reject(error);
  }
);

export default api;