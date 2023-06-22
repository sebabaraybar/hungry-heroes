import api from "../api/api";
import apiUrl from "../api/apiUrl";

const getProductsByBusinessId = (id) => {
	let urlService = apiUrl.getUrlService('product.getProductsByBusinessId');
	urlService = urlService.replace(':id', id);

	return api.get(urlService);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getProductsByBusinessId
};

