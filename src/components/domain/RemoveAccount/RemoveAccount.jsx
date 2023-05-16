import React from "react";
import { useNavigate } from "react-router-dom";
import MasterCard from "../../layout/MasterCard/MasterCard";
import CButton from "../../ui/Button/CButton";
import ROUTES_ENUM from "../../../enums/routesEnum";

const RemoveAccount = function () {

	const navigate = useNavigate();

	const onRemoveAccount = ({ id }) => {
		alert("llama al servicio RemoveAccount");
		navigate(ROUTES_ENUM.AUTH_LOGIN);

	}

	return (
		<MasterCard
			headerTitle="Eliminar cuenta"
			headerSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		>
			<CButton
				type="submit"
				title="Eliminar cuenta"
				sx={{fontSize: '1.2rem'}}
				onClick={onRemoveAccount}
			/>
		</MasterCard>

	);
};

export default RemoveAccount;