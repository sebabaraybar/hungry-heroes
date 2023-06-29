import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUM from '../../enums/routesEnum';

// The RequireAuth component is used to restrict access to certain routes or components.
// It ensures that only authenticated users can access the routes or components wrapped by it, providing a mechanism for enforcing authentication in the application.

const RequireAuth = function ({ children }) {
	const navigate = useNavigate();
	const auth = localStorage.getItem('jwtToken');

	const isAllowLocation = () => {
		if (auth) {
			return true;
		} else {
			navigate(ROUTES_ENUM.AUTH_LOGIN);
			return false;
		}
	};

	if(isAllowLocation()) {
		return children;
	}
};

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired
};

export default RequireAuth;
