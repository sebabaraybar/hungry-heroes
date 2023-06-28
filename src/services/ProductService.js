import api from "../api/api";
import apiUrl from "../api/apiUrl";

const getProductsByBusinessId = (id) => {
	let urlService = apiUrl.getUrlService('product.getProductsByBusinessId');
	urlService = urlService.replace(':id', id);

	return api.get(urlService);
};

const createProduct = (body) => {
	const urlService = apiUrl.getUrlService('product.createProduct');

	return api.post(urlService, body);
};

const editProduct = (businessId, body) => {
	const bodyAfter = {	...body };
	bodyAfter.userBusinessId = businessId;
	bodyAfter.productId = null;
	let urlService = apiUrl.getUrlService('product.editProduct');
	urlService = urlService.replace(':id', body.productId);

	return api.put(urlService, bodyAfter)
};

const deleteProduct = (id) => {
	let urlService = apiUrl.getUrlService('product.deleteProduct');
	urlService = urlService.replace(':id', id);

	return api.delete(urlService);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getProductsByBusinessId,
	createProduct,
	editProduct,
	deleteProduct
};

