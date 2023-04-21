import React from "react";
import MasterCard from "../components/layout/MasterCard/MasterCard";
import CButton from "../components/ui/Button/CButton";

const ErrorPage = () => {
	return (
			<MasterCard 
				headerTitle="La página que buscás no existe"
				headerSubtitle="Error 404"
				footerBtnTile="Volver"
				// onClick={() => }
			>
				<CButton 
					title="Volver"
					sx={{fontSize: '1.2rem'}}
				/>
			</MasterCard>
	);
};

export default ErrorPage;