import React, { useRef, useState } from 'react';
import boxList from '../box.json';
import { Box, Button, Dialog, DialogTitle } from '@mui/material';
import BoxCard from '../components/ui/BoxCard/BoxCard';
import CDialog from '../components/ui/form/CDialog';
import logo from '../media/logo.svg';
import FormBox from '../components/domain/Boxes/FormBox';
import styles from './BoxContainer.module.scss';

const BoxContainer = function () {

	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [item, setItem] = useState({});
	const formikRef = useRef();

	// const editBox = (values) => {
	// 	setOpenModalEdit(true);
	// 	console.log(values);
	// }

	// const handleClickEditDialog = (value) => {
	// 	// const boxEdit = {...item};
	// 	// setLoading(true);
	// 	console.log(value);
	// }
	const createBox = (values) => {
		console.log(values);
		console.log("TESTTTTT");
	}


	return (
		<Box className={styles.container}>
			<Box className={styles.btnContainer}>
				<Button
					variant='contained'
					color='primary'
					onClick={()=> {setOpenModalEdit(true)}}
				>
						Crear Box
				</Button>
			</Box>
			<Box className={styles.cardContainer}>
				{boxList.map((box) => (
					<BoxCard
					key={box.id}
					title={box.name}
					alt={`Logo de ${box.name}`}
					//esto va a venir del back, ver cómo
					logo={logo}
					//hay que definir cant de caracteres
					description={box.detail}
					// onEdit={() => editBox(box.id)}
					// onDelete={() => console.log(`delete ${box.id}`)}
					/>
				))}
			</Box>
			<CDialog
				title="Crear box"
				open={openModalEdit}
				closeModal={() => setOpenModalEdit(false)}
				btnPrimary={{
					title: "Guardar",
					type: "submit",
					action: createBox
				}}
			>
				<FormBox
					onSubmit={createBox}
					formikRef={formikRef}
				/>
			</CDialog>
		</Box>
	);
};

export default BoxContainer;
