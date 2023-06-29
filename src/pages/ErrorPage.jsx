import React from "react";
import MasterCard from "../components/layout/MasterCard/MasterCard";
import CButton from "../components/ui/Button/CButton";
import { useNavigate } from "react-router-dom";
import ROUTES_ENUM from "../enums/routesEnum";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
			<MasterCard 
				logoComponent
				headerTitle="La página que buscás no existe"
				headerSubtitle="Error 404"
			>
				<CButton 
					title="Volver"
					onClick={() => navigate(ROUTES_ENUM.AUTH_LOGIN)}
					sx={{fontSize: '1.2rem'}}
				/>
			</MasterCard>
	);
};

export default ErrorPage;