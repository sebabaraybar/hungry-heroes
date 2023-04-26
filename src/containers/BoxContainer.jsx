import React, { useRef, useState } from 'react';
import boxList from '../box.json';
import { Box, Typography } from '@mui/material';
import BoxCard from '../components/ui/BoxCard/BoxCard';
import CDialog from '../components/ui/form/CDialog';
import CButton from '../components/ui/Button/CButton';
import img from '../media/box-img-placeholder.png'
import FormBox from '../components/domain/Boxes/FormBox';
import styles from './BoxContainer.module.scss';

const BoxContainer = function () {
	
	const formikRef = useRef();
	const [openModalCreate, setOpenModalCreate] = useState(false);
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [item, setItem] = useState(null);
	const [boxName, setBoxName] = useState();

	const createBox = (values) => {
		console.log(values);
		alert("llama al servicio createBox");
		setOpenModalCreate(false);
	}

	const editBox = () => {
		alert("llama al servicio editBox");
		setOpenModalEdit(false);
	}

	const handleEditBox = (item) => {
		setItem(item);
		setOpenModalEdit(true);
		console.log(item);
		console.log(item.name);
	}

	const deleteBox = () => {
		alert("llama al servicio deleteBox");
		setOpenModalDelete(false);
	}

	const handleDeleteBox = (item) => {
		setItem(item);
		setBoxName(item.name);
		setOpenModalDelete(true);
	}	

	return (
		<Box className={styles.container}>
			<Box className={styles.btnContainer}>
				<CButton
					title="Crear box"
					sx={{fontSize: '1.2rem'}}
					onClick={()=> {setOpenModalCreate(true)}}
				/>
			</Box>
			<Box className={styles.cardContainer}>
				{boxList.map((box) => (
					<BoxCard
					key={box.id}
					title={box.name}
					alt={`Logo de ${box.name}`}
					img={img}
					//hay que definir cant de caracteres
					description={box.detail}
					onEdit={() => handleEditBox(box)}
					onDelete={() => handleDeleteBox(box)}
					/>
				))}
			</Box>
			<CDialog
				title="Crear"
				open={openModalCreate}
				closeModal={() => setOpenModalCreate(false)}
				btnDialogTitle="Guardar"
				btnDialogOnClick={createBox}
				formikRef={formikRef}
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
				btnDialogOnClick={deleteBox}
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
