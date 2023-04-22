const ROUTES_ENUM = Object.freeze({
	AUTH_LOGIN: '/login',
	AUTH_RESTORE_PASS: '/restore',
	AUTH_EMAIL_SENT: 'emailsent',
	AUTH_CHANGE_PASS: 'change-password',
	AUTH_REQUEST_PASS: 'request-password',
	AUTH_REQUEST_PASS_CONFIRMATION: 'request-password-confirmation',
	
	CREATE_ACCOUNT: '/create-account',
	ABOUT: '/about',
	// USERS: '/users',
	BUSINESS: '/business',
	// BOXES: '/business/:id',
	BOXES: '/boxes',
	PROFILE: 'user/:id'
});

const ROUTES_KEY_ENUM = Object.freeze({
	ABOUT: 'ABOUT',
	BUSINESS: 'BUSINESS',
	BOXES: 'BOXES',
	PROFILE: 'PROFILE'
});

export { ROUTES_KEY_ENUM };

export default ROUTES_ENUM;