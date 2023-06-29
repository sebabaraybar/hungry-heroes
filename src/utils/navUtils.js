import { ROLES_ENUM } from "../enums/rolesEnum";
import ROUTES_ENUM from "../enums/routesEnum";

// const NAV_SYSTEM = [
// 	{
// 		key: ROUTES_KEY_ENUM.PROFILE,
// 		label: 'Perfil',
// 		link: ROUTES_ENUM.PROFILE,
// 		roles: [ROLES_ENUM.ROLE_BUSINESS],
// 		order: 1
// 	},
// 	{
// 		key: ROUTES_KEY_ENUM.CHANGE_PASSWORD,
// 		label: 'Cambiar contraseña',
// 		link: ROUTES_ENUM.CHANGE_PASSWORD,
// 		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
// 		order: 2
// 	},
// 	{
//     key: ROUTES_KEY_ENUM.SALES,
//     label: 'Mis ventas',
//     link: ROUTES_ENUM.SALES,
//     roles: [ROLES_ENUM.ROLE_BUSINESS],
//     order: 3
//   },
//   {
//     key: ROUTES_KEY_ENUM.SALES,
//     label: 'Mis compras',
//     link: ROUTES_ENUM.SALES,
//     roles: [ROLES_ENUM.ROLE_CLIENT],
//     order: 3
//   },
// 	{
// 		key: ROUTES_KEY_ENUM.LOGOUT,
// 		label: 'Cerrar sesión',
// 		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
// 		order: 4
// 	},
// 	{
// 		key: ROUTES_KEY_ENUM.REMOVE_ACCOUNT,
// 		label: 'Eliminar cuenta',
// 		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
// 		order: 5
// 	}
// ];

const getHome = (userRole) => {
    const matchedRole = Object.values(ROLES_ENUM).find((role) => role.name === userRole);
    if (matchedRole) {
      return matchedRole.home;
  }
  return ROUTES_ENUM.AUTH_LOGIN;
};

export {
	getHome
};