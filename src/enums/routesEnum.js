const ROUTES_ENUM = Object.freeze({
	AUTH_LOGIN: '/login',
	AUTH_RESTORE_PASS: '/restore-password',
	AUTH_EMAIL_SENT: '/emailsent',
	AUTH_CHANGE_PASS_CONFIRMATION: '/change-password-confirmation',
	AUTH_REQUEST_PASS: '/Accounts/forgot-password',
	AUTH_REQUEST_PASS_CONFIRMATION: '/request-password-confirmation',
	AUTH_RESET_PASS: '/Accounts/reset-password',
	
	CREATE_ACCOUNT: '/Accounts/register',
	CREATE_ACCOUNT_CONFIRMATION: '/create-account-confirmation',
	REMOVE_ACCOUNT: '/remove-account',
	ABOUT: '/about',
	// USERS: '/users',
	BUSINESS: '/business',
	// BOXES: '/business/:id',
	BOXES: '/boxes',
	BOXES_FOR_CLIENT:'/businessboxes',
	// PROFILE: '/user/:id'
	PROFILE: '/profile',
	SALES: '/sales'
});

const ROUTES_KEY_ENUM = Object.freeze({
	// ABOUT: 'ABOUT',
	BUSINESS: 'BUSINESS',
	BOXES: 'BOXES',
	PROFILE: 'PROFILE',
	CHANGE_PASSWORD: 'AUTH_CHANGE_PASS',
	LOGOUT: 'AUTH_LOGIN',
	SALES: 'SALES',
	REMOVE_ACCOUNT: 'REMOVE_ACCOUNT'
});

export { ROUTES_KEY_ENUM };

export default ROUTES_ENUM;