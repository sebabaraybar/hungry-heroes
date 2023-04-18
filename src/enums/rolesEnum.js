import ROUTES_ENUM from "./routesEnum";

const ROLES_ENUM = Object.freeze({
	ROLE_CLIENT: {
		id: 1, key: 'ROLE_CLIENT', name: 'ROLE_CLIENT', home: ROUTES_ENUM.BUSINESS
	},
	ROLE_BUSINESS: {
		id: 2, key: 'ROLE_BUSINESS', name: 'ROLE_BUSINESS', home: ROUTES_ENUM.BOXES
	}
});

export {
	ROLES_ENUM
};