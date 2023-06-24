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
	// {
	// 	key: ROUTES_KEY_ENUM.SALES,
	// 	// label: [ROLES_ENUM.ROLE_BUSINESS ? 'Mis ventas' :'Mis compras'],
	// 	label: userLocalRole === ROLES_ENUM.ROLE_BUSINESS ? 'Mis ventas' : 'Mis compras',
	// 	link: ROUTES_ENUM.SALES,
	// 	roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
	// 	order: 3
	// },
	{
    key: ROUTES_KEY_ENUM.SALES,
    label: 'Mis ventas',
    link: ROUTES_ENUM.SALES,
    roles: [ROLES_ENUM.ROLE_BUSINESS],
    order: 3
  },
  {
    key: ROUTES_KEY_ENUM.SALES,
    label: 'Mis compras',
    link: ROUTES_ENUM.SALES,
    roles: [ROLES_ENUM.ROLE_CLIENT],
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
  const userLocal = localStorage.getItem('role');
	console.log(userLocal)
  // const user = JSON.parse(userLocal);
  const itemForUser = NAV_SYSTEM.filter((item) => item.roles.includes(userLocal) || item.roles.includes('*'));
  const itemsInOrder = itemForUser.sort((o1, o2) => o1.order - o2.order);
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