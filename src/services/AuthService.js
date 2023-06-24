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
	console.log("SERVICIO", email, password, confirmPassword, role);
	console.log("SERVICIO", role, typeof role);
  const urlService = apiUrl.getUrlService('auth.register');
  return api.post(urlService, email, password, confirmPassword, role )
	.then((response) => {
		console.log(response);
		console.log("SERVICIO", email, password, confirmPassword, role);
	})
	.catch((err) => {
		console.log(err);
		console.log("SERVICIO", email, password, confirmPassword, role);
	})
};

const requestPass = (email) => {
	const urlService = apiUrl.getUrlService('auth.requestPass');
	const UriParameters = new URLSearchParams();
	let url;

	UriParameters.append('email', email);

	if(UriParameters.entries().next().done === false) {
		url = urlService.concat(`?${UriParameters.toString()}`);
	}
	return api.post(url, {email})
	.then((response) => {
		localStorage.setItem('storedEmail', email);
		return response;
	})
	.catch((error) => {
		return error
	});
};



const restorePass = (body) => {
	const urlService = apiUrl.getUrlService('auth.restorePass');
	return api.post(urlService, body);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	login,
	logout,
	register,
	restorePass,
	requestPass
};
