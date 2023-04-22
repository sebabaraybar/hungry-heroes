import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MasterCard from '../../layout/MasterCard/MasterCard';
import { Typography } from '@mui/material';
import CButton from '../../ui/Button/CButton';
import { LoginRounded } from '@mui/icons-material';
import ROUTES_ENUM from '../../../enums/routesEnum';

const RequestPassConfirmation = function () {
	const navigate = useNavigate();
	// const [ searchParams ] = useSearchParams();
	// const email = searchParams.get('email');
	const email = "camila@email.com"

	const reSend = () => {
		alert("Llama al servicio requestPass")
	};

	return (
		<MasterCard
			logoComponent
			headerTitle="¡E-mail enviado!"
			headerSubtitle={`Enviamos un e-mail a ${email} para que puedas reestablecer tu contraseña`}
			footerComponent
			footerBtnTitle='Ir al login'
			footerBtnIcon={ <LoginRounded /> }
			onClick={() => navigate(ROUTES_ENUM.AUTH_LOGIN)}
		>
			<Typography mb={2}>
				¿No recibiste el e-mail?
			</Typography>
			<CButton
				type="submit"
				title="Reenviar e-mail"
				onClick={reSend}
			/>
		</MasterCard>
	);
};

export default RequestPassConfirmation;
