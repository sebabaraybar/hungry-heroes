import { ROLES_ENUM } from "../enums/rolesEnum";
import ROUTES_ENUM, { ROUTES_KEY_ENUM } from "../enums/routesEnum";
import { LOCAL_STORAGE } from "./constants";
import users from '../user.json';

const NAV_SYSTEM = [
	// ver esto, porque about es pública
	{
		key: ROUTES_KEY_ENUM.PROFILE,
		label: 'Perfil',
		link: ROUTES_ENUM.PROFILE,
		roles: [ROLES_ENUM.ROLE_BUSINESS],
		order: 1
	},
	{
		key: ROUTES_KEY_ENUM.CHANGE_PASSWORD,
		label: 'Cambiar contraseña',
		link: ROUTES_ENUM.CHANGE_PASSWORD,
		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
		order: 2
	},
	{
		key: ROUTES_KEY_ENUM.SALES,
		label: [ROLES_ENUM.ROLE_BUSINESS ? 'Mis ventas' :'Mis compras'],
		link: ROUTES_ENUM.SALES,
		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
		order: 3
	},
	{
		key: ROUTES_KEY_ENUM.LOGOUT,
		label: 'Cerrar sesión',
		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
		order: 4
	},
	{
		key: ROUTES_KEY_ENUM.REMOVE_ACCOUNT,
		label: 'Eliminar cuenta',
		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
		order: 5
	}
];

const getItemsForRole = () => {
  const userLocalRole = localStorage.getItem(LOCAL_STORAGE.USER_ROLE);
	console.log(userLocalRole)
  // const user = JSON.parse(userLocal);
	console.log(NAV_SYSTEM)
  const itemForUser = NAV_SYSTEM.filter((item) => item.roles.includes(userLocalRole));
  const itemsInOrder = itemForUser.sort((o1, o2) => o1.order - o2.order);
	console.log(itemForUser)
	console.log(itemsInOrder)
  return itemsInOrder;
};

const getHome = () => {
  // const userLogged = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_LOGGED));
	const userLoggedRole = localStorage.getItem(LOCAL_STORAGE.USER_ROLE);
  if (userLoggedRole) {
    const { userProfile } = userLoggedRole;

    const matchedRole = Object.values(ROLES_ENUM).find((role) => role.name === userProfile);
    if (matchedRole) {
      return matchedRole.home;
    }
    return ROUTES_ENUM.HOME;
  }

  return ROUTES_ENUM.AUTH_LOGIN;
};

export {
	NAV_SYSTEM,
	getItemsForRole,
	getHome
};