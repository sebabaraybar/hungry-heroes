import api from "../api/api";
import apiUrl from "../api/apiUrl";

const login = (email, password) => {
	const urlService = apiUrl.getUrlService('auth.login');
	console.log("SERVICE", email, password);
	return api.post(urlService, { email, password });
};

const logout = () => {
	localStorage.clear();
};

const register = (email, password, confirmPassword, role) => {
	const urlService = apiUrl.getUrlService('auth.register');
	return api.post(urlService, { email, password, confirmPassword, role});
};

const restorePass = (body) => {
	const urlService = apiUrl.getUrlService('auth.restorePass');
	return api.post(urlService, body);
};

const requestPass = (email) => {
	const urlService = apiUrl.getUrlService('auth.requestPass');
	const UriParameters = new URLSearchParams();
	let url;

	UriParameters.append('mail', email);

	if(UriParameters.entries().next().done === false) {
		url = urlService.concat(`?${UriParameters.toString()}`);
	}
	return api.get(url);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	login,
	logout,
	register,
	restorePass,
	requestPass
};
