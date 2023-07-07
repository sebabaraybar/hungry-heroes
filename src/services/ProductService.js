import api from "../api/api";
import apiUrl from "../api/apiUrl";

const getProductsByBusinessId = (id) => {
	let urlService = apiUrl.getUrlService('product.getProductsByBusinessId');
	urlService = urlService.replace(':id', id);

	return api.get(urlService);
};

const createProduct = (businessId, body, image) => {
	const bodyAfter = { ...body };
	bodyAfter.userBusinessId = parseInt(businessId);
	bodyAfter.stock = parseInt(body.stock);
	bodyAfter.price = parseInt(body.price);
	bodyAfter.image = image;
	const urlService = apiUrl.getUrlService('product.createProduct');
console.log(bodyAfter);
 return api.post(urlService, bodyAfter);
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

