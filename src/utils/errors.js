const MSG_ERROR_GENERIC = 'Estamos experimentando problemas, intente nuevamente más tarde';

const ERRORS_ENUM = {
  // Exclusive frontent
  SERVER_OFF: 'Los servidores estan caídos. Por favor, comuníquese con un Administrador',
  NO_SESSION: 'La sesión ha expirado. Ingrese nuevamente',
  // Fin exlusive frontend

  BAD_REQUEST: 'Revise la información ingresada',
  WRONG_SECURITY_CODE: 'Código incorrecto. Vuelva a intentar más tarde',
  TOKEN_EXPIRED: 'El tiempo se ha terminado. Ingrese nuevo código',
  API_PENA_UNAUTHORIZED: 'La sesión ha expirado. Ingrese nuevamente',

  ACCESS_DENIED: 'Acceso denegado',
  INACTIVE_USER: 'Este usuario se encuentra inactivo',
  'Email or password is incorrect': 'Contraseña y/o usuario incorrecto',
  INCORRECT_PASSWORD: 'Contraseña actual incorrecta',

  HANDLE_SERVER_EXCEPTION: MSG_ERROR_GENERIC, // 'Service error',
  MISSING_REQUEST_PART: MSG_ERROR_GENERIC, // 'Missing request part',
  REQUEST_IS_NOT_MULTIPART: MSG_ERROR_GENERIC, // 'Current request is not a multipart request',
  UNKNOWN_ERROR: MSG_ERROR_GENERIC, // 'Error desconocido',
  BUSSINESS_ERROR: MSG_ERROR_GENERIC,
  MANDATORY_FIELD: 'Campo obligatorio',

  UNAUTHORIZED: 'El e-mail ingresado no se encuentra registrado', // recuperar pass -> email no existe
  DUPLICATE_USERNAME_FIELD: 'El email ingresado ya existe en el sistema',
  STATUS_PENDING_MANUAL_CHANGE: 'Los usuarios en estado PENDIENTE no pueden ser activados manualmente',
  BAD_PASSWORD_LENGHT: 'La contraseña debe contener de 8 a 20 caracteres',
  RESOURCE_NOT_FOUND: 'El usuario no existe',
  SAME_PASSWORDS: 'La nueva contraseña debe ser distinta a la anterior',

  ERROR_TO_DOWNLOAD_RECORDING: 'No se puede descargar el audio',
  ERROR_TO_DELETE_RECORDING: 'No se puede eliminar el audio'

};

const handleError = (error) => {
	if(!error.message) {
		return MSG_ERROR_GENERIC;
	}
	if (error.code && error.code === ERRORS_ENUM.SERVER_OFF) {
    return ERRORS_ENUM.SERVER_OFF;
  }

	const errors = Object.entries(ERRORS_ENUM);
  const errorMsg = errors.find((err) => err[0] === error.message);

  if (!errorMsg) {
    return MSG_ERROR_GENERIC;
  }
  return errorMsg[1];
};

export {
  MSG_ERROR_GENERIC,
  ERRORS_ENUM
};

export default handleError;
