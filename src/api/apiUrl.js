import API_BASE_URL from './environments';
const API = 'https://hungry-heroes.azurewebsites.net';
const apiUrl = {
	auth: {
		login: `${API}/Accounts/login`,
		// login: `/Accounts/login`,
		register: `${API}/Accounts/register`,
		requestPass: `${API}/Accounts/forgot-password`,
		restorePass: 'auth/restore-password'
	},
	user: {
		me: 'users/me',
		getUsers: '/users',
		createUser: '/users',
		deleteUSer: '/users/:id',
		editUser: '/users/:id',
		getSingleUser: '/users/:id'
	},
	business: {
		getBusinesses: `${API}/Business/All`,
		getBusinessById: `${API}/Business/:id`,
		editBusiness: `${API}/Business/:id`,
	},
	product: {
		getProductsByBusinessId: `${API}/Product/AllByBusiness/:id`,
		createProduct: `${API}/Product`
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