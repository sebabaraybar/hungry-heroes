import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES_ENUM from '../enums/routesEnum';
import boxList from '../box.json';
import { Box, Typography } from '@mui/material';
import BoxCard from '../components/ui/BoxCard/BoxCard';
import CDialog from '../components/ui/form/CDialog';
import CButton from '../components/ui/Button/CButton';
import img from '../media/box-img-placeholder.png'
import FormBox from '../components/domain/Boxes/FormBox';
import styles from './BoxContainer.module.scss';
import ProductService from '../services/ProductService';

const BoxContainer = function () {
	
	const navigate = useNavigate();
	const formikRef = useRef();
	const [openModalCreate, setOpenModalCreate] = useState(false);
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [item, setItem] = useState(null);
	const [boxName, setBoxName] = useState();
	const [boxes, setBoxes] = useState([]);
	const userType = localStorage.getItem('role');
	console.log(userType)
	// INSTANCIA FINAL
	// const businessId = localStorage.getItem('businessId');
	const businessId = 1;

	useEffect(() => {
		ProductService.getProductsByBusinessId(businessId)
	.then((response) => {
		setBoxes(response)
		console.log(boxes)
	})
	.catch((error) => {
   console.log(error)
	})
	},[]);

	const createBox = (values) => {
		console.log(values);
		const valuesAfter = {...values};
		valuesAfter.userBusinessId = businessId;
		ProductService.createProduct(valuesAfter)
		.then((response) => {
			setBoxes((prevBoxes) => [...prevBoxes, response]);
			console.log(boxes);
		})
		.catch((error) => {
			console.log(error);
		})
		setOpenModalCreate(false);
	};

	const editBox = () => {
		alert("llama al servicio editBox");
		setOpenModalEdit(false);
	};

	const handleEditBox = (box) => {
		setItem(box);
		setOpenModalEdit(true);
		console.log(box);
		console.log(box.name);
	};

	const deleteBox = () => {
		alert("llama al servicio deleteBox");
		setOpenModalDelete(false);
	};

	const handleDeleteBox = (item) => {
		setItem(item);
		setBoxName(item.name);
		setOpenModalDelete(true);
	};	

	const handleBuyBox = (item) => {
		setItem(item);
		setBoxName(item.name);
		alert("llama al servicio comprar:")
	};

	return (
		<Box className={styles.container}>
			<Box className={styles.btnContainer}>
				<CButton
					title="Crear box"
					sx={{fontSize: '1.2rem'}}
					variant="contained"
					onClick={()=> {setOpenModalCreate(true)}}
				/>
			</Box>
			<Box className={styles.cardContainer}>
				{boxes.length === 0 ? (
					<Box className={styles.emptycontainer}>
						<Typography>
							Todavía no creaste ningún box.
						</Typography>
						<Typography mt={4}>
							además, para que tus boxes sean publicados es necesario que
						</Typography>
						<CButton 
						title="Completes tu perfil"
						onClick={() => navigate
						(ROUTES_ENUM.PROFILE)}
						/>
					</Box>
				) : (
				boxes.map((box) => (
					<BoxCard
					key={box.id}
					title={box.name}
					alt={`Logo de ${box.name}`}
					img={img}
					//hay que definir cant de caracteres
					description={box.description}
					stock={box.stock}
					price={box.price}
					onEdit={() => handleEditBox(box)}
					onDelete={() => handleDeleteBox(box)}
					onBuy={() => handleBuyBox(box)}
					userType={userType}
					published={box.published}
					/>
				)))
				}
			</Box>
			<CDialog
				title="Crear"
				open={openModalCreate}
				closeModal={() => setOpenModalCreate(false)}
				btnDialogTitle="Guardar"
				btnDialogOnClick={() => createBox(formikRef.current.values)}

				formikRef={formikRef}
			>
				<FormBox
					onSubmit={createBox}
					formikRef={formikRef}
					// businessId={businessId}
				/>
			</CDialog>
			<CDialog
				title="Eliminar"
				open={openModalDelete}
				closeModal={() => setOpenModalDelete(false)}
				btnDialogTitle="Eliminar"
				btnDialogOnClick={() => deleteBox(formikRef.current.values)}
				formikRef={formikRef}
			>
				<Typography variant='h6'>
					¿Querés eliminar el box {boxName}?
				</Typography>
			</CDialog>
			<CDialog
				title="Editar"
				open={openModalEdit}
				closeModal={() => setOpenModalEdit(false)}
				btnDialogTitle="Guardar cambios"
				btnDialogOnClick={editBox}
				formikRef={formikRef}
			>
				<FormBox
					onSubmit={editBox}
					formikRef={formikRef}
				/>
			</CDialog>
		</Box>
	);
};

export default BoxContainer;
