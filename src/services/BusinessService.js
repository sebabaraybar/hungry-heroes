import api from "../api/api";
import apiUrl from "../api/apiUrl";

const getBusinesses = () => {
	const urlService = apiUrl.getUrlService('business.getBusinesses');
	return api.get(urlService);
};

const getBusinessById = (id, body) => {
	console.log("SERVICE", id)
	let urlService = apiUrl.getUrlService('business.getBusinessById');
	urlService = urlService.replace(':id', id);
	return api.get(urlService, body);
};

const editBusiness = (id) => {
	let urlService = apiUrl.getUrlService('business.editBusiness');
	urlService = urlService.replace(':id', id);
	return api.put(urlService);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getBusinesses,
	getBusinessById,
	editBusiness
};