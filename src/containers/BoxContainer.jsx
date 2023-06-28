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

const BoxContainer = function () {
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
	const businessId = localStorage.getItem('userBusinessId');
	const [activeProfile, setActiveProfile] = useState();

	useEffect(() => {
		setLoading(true);
		ProductService.getProductsByBusinessId(businessId)
	.then((response) => {
		setBoxes(response)
		setLoading(false);
	})
	.catch((error) => {
   console.log(error)
	 setLoading(false);
	})
	},[]);

	//TODO pasar a un context
	useEffect(() => {
		BusinessService.getBusinessById(businessId)
		.then((response) => {
			setActiveProfile(response.activeProfile);
			console.log(activeProfile)
			console.log(response)
		})
		.catch((error) => {
			console.log(error);
		})
	}, [businessId, activeProfile]);

	const createBox = (values) => {
		setLoading(true);
		const valuesAfter = {...values};
		valuesAfter.userBusinessId = businessId;
		ProductService.createProduct(valuesAfter)
		.then((response) => {
			setBoxes((prevBoxes) => [...prevBoxes, response]);
			setLoading(false);
		})
		.catch((error) => {
			console.log(error);
			setLoading(false);
		})
		setOpenModalCreate(false);
	};

	const handleEditBox = (box) => {
		setBox(box);
		setOpenModalEdit(true);
	};

	const editBox = (values) => {
		console.log(values)
		setLoading(true);
		ProductService.editProduct(businessId, values)
		.then((response) => {
			console.log(response)
			setLoading(false);
			navigate(0);
		})
		.catch((error) => {
			console.log(error)
		})
		setOpenModalEdit(false);
	};

	const handleDeleteBox = (box) => {
		setBox(box);
		setBoxName(box.name);
		setOpenModalDelete(true);
	};	

	const deleteBox = (box) => {
		console.log(box)
		setLoading(true);
		ProductService.deleteProduct(box.productId)
		.then(() => {
			setLoading(false);
			navigate(0);
		})
		.catch((error) => {
			console.log(error);
			setLoading(false);
		})
		setOpenModalDelete(false);
	};

	const handleBuyBox = (box) => {
		setBox(box);
		setBoxName(box.name);
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
							Todavía no creaste ningún box
						</Typography>
						{!activeProfile && (
						<>
							<Typography mt={4}>
								Tené en cuenta que para que tus boxes sean publicados es necesario que
							</Typography>
							<CButton 
							title="Completes tu perfil"
							onClick={() => navigate
							(ROUTES_ENUM.PROFILE)}
							/>
						</>
						)}
					</Box>
				) : (
				boxes.map((box) => (
					<BoxCard
					key={box.productId}
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
					activeProfile={activeProfile}
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
				// formikRef={formikRef}
			>
				<FormBox
					onSubmit={createBox}
					formikRef={formikRef}
				/>
			</CDialog>
			<CDialog
				title="Eliminar"
				open={openModalDelete}
				closeModal={() => setOpenModalDelete(false)}
				btnDialogTitle="Eliminar"
				btnDialogOnClick={() => deleteBox(box)}
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
				btnDialogOnClick={() => editBox(formikRef.current.values)}
				formikRef={formikRef.current}
			>
				<FormBox
					onSubmit={editBox}
					formikRef={formikRef}
					box={box}
				/>
			</CDialog>
		</Box>
	);
};

export default BoxContainer;
