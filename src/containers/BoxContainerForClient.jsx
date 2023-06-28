import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUM from '../enums/routesEnum';
import { Box, Typography } from '@mui/material';
import BoxCard from '../components/ui/BoxCard/BoxCard';
import CDialog from '../components/ui/form/CDialog';
import CButton from '../components/ui/Button/CButton';
import img from '../media/box-img-placeholder.png'
import FormBox from '../components/domain/Boxes/FormBox';
import styles from './BoxContainer.module.scss';
import ProductService from '../services/ProductService';
import useLoading from '../hooks/useLoading';
import BusinessService from '../services/BusinessService';

const BoxContainerForClient = function () {
	const navigate = useNavigate();
	const formikRef = useRef();
	const setLoading = useLoading();
	const [openModalCreate, setOpenModalCreate] = useState(false);
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [box, setBox] = useState(null);
	const [boxName, setBoxName] = useState();
	const [boxes, setBoxes] = useState([]);
	const userType = localStorage.getItem('role');
	// const clientId = localStorage.getItem('userClientId');
	// const [activeProfile, setActiveProfile] = useState();


	const handleBuyBox = (box) => {
		setBox(box);
		setBoxName(box.name);
		alert("llama al servicio comprar:")
	};

	return (
		<Box className={styles.container}>
			<Box className={styles.cardContainer}>
				{boxes.map((box) => (
					<BoxCard
					key={box.productId}
					title={box.name}
					alt={`Logo de ${box.name}`}
					img={img}
					//hay que definir cant de caracteres
					description={box.description}
					stock={box.stock}
					price={box.price}
					userType={userType}
					/>
				))
				}
			</Box>
		</Box>
	);
};

export default BoxContainerForClient;
