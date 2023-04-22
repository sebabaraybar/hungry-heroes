import React from "react";
// import useNavigate from 'react-router-dom';
import MasterCard from "../components/layout/MasterCard/MasterCard";
import CButton from "../components/ui/Button/CButton";

const ErrorPage = () => {
	// const navigate = useNavigate();

	return (
			<MasterCard 
				logoComponent
				headerTitle="La página que buscás no existe"
				headerSubtitle="Error 404"
			>
				<CButton 
					title="Volver"
					onClick={() => alert("Vuelve a la home")}
					sx={{fontSize: '1.2rem'}}
				/>
			</MasterCard>
	);
};

export default ErrorPage;