import api from "../api/api";
import apiUrl from "../api/apiUrl";

const getBusinesses = () => {
	const urlService = apiUrl.getUrlService('business.getBusinesses');
	return api.get(urlService);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getBusinesses
};