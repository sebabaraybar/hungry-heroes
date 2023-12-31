import React from "react";
import { useNavigate } from "react-router-dom";
import MasterCard from "../../layout/MasterCard/MasterCard";
import CButton from "../../ui/Button/CButton";
import ROUTES_ENUM from "../../../enums/routesEnum";
import AuthService from "../../../services/AuthService";
import useLoading from "../../../hooks/useLoading";
import useSnackbar from "../../../hooks/useSnackbar";

const RemoveAccount = function () {

	const navigate = useNavigate();
	const setLoading = useLoading();
	const userEmail = localStorage.getItem('id');
	const setSnackbar = useSnackbar();

	const onRemoveAccount = () => {
		setLoading(true);
		AuthService.deleteAccount(userEmail)
		.then(() => {
			setLoading(false);
			navigate(ROUTES_ENUM.ABOUT);
		})
		.catch((error) => {
			console.log(error);
			setSnackbar({message: error.message, severity: 'error'});
			setLoading(false);
		})
	}

	return (
		<MasterCard
			headerTitle="Eliminar cuenta"
			headerSubtitle="La eliminación de la cuenta implica la pérdida permanente de todos tus datos, incluyendo la información personal y el historial asociado a tu perfil, así que no podrás acceder a tu cuenta ni recuperar ninguna información una vez que se complete el proceso de eliminación."
		>
			<CButton
				type="submit"
				title="Confirmo que deseo eliminar mi cuenta"
				sx={{fontSize: '1.2rem'}}
				onClick={onRemoveAccount}
			/>
		</MasterCard>

	);
};

export default RemoveAccount;