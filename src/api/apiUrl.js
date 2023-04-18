const apiUrl = {
	auth: {
		login: 'auth/login',
		restorePass: 'auth/restore-password',
		requestPass: 'auth/send-restore-email'
	},
	user: {
		me: 'users/me',
		getUsers: '/users',
		createUser: '/users',
		deleteUSer: '/users/:id',
		editUser: '/users/:id',
		getSingleUser: '/users/:id'
	}
};

const getUrlService = (apiService) => {
	const serviceUrlSplit = apiService.split('.');
	const serviceUrl = apiUrl[serviceUrlSplit[0]][serviceUrlSplit[1]];
	return serviceUrl;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getUrlService,
	apiUrl
};