import { ROLES_ENUM } from "../enums/rolesEnum";
import ROUTES_ENUM, { ROUTES_KEY_ENUM } from "../enums/routesEnum";
import { LOCAL_STORAGE } from "./constants";

const NAV_SYSTEM = [
	// ver esto, porque about es pública
	{
		key: ROUTES_KEY_ENUM.ABOUT,
		label: 'Sobre nosotros',
		link: ROUTES_ENUM.ABOUT,
		roles: [ROLES_ENUM.ROLE_BUSINESS, ROLES_ENUM.ROLE_CLIENT],
		order: 1
	},
	{
		key: ROUTES_KEY_ENUM.PROFILE,
		label: 'Perfil',
		link: ROUTES_ENUM.PROFILE,
		roles: [ROLES_ENUM.ROLE_BUSINESS],
		order: 2
	}
];

const getItemsForRol = () => {
  const userLocal = localStorage.getItem(LOCAL_STORAGE.USER_LOGGED);
  const user = JSON.parse(userLocal);
  const itemForUser = NAV_SYSTEM.filter((item) => item.roles.includes(user.userProfile));
  const itemsInOrder = itemForUser.sort((o1, o2) => o1.order - o2.order);
  return itemsInOrder;
};

const getHome = () => {
  const userLogged = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_LOGGED));
  if (userLogged) {
    const { userProfile } = userLogged;

    const matchedRole = Object.values(ROLES_ENUM).find((role) => role.key === userProfile);
    if (matchedRole) {
      return matchedRole.home;
    }
    return ROUTES_ENUM.HOME;
  }

  return ROUTES_ENUM.AUTH_LOGIN;
};

export {
	NAV_SYSTEM,
	getItemsForRol,
	getHome
};