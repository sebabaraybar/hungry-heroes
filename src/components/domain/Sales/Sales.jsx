import React from 'react';
import salesList from '../../../sales.json';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Paper,Typography } from '@mui/material';
import CTextField from '../../ui/form/CTextField';
import styles from './Sales.module.scss';
import CButton from '../../ui/Button/CButton';

const Sales = function() {
	let type="clisent";

	const VALIDATION = Yup.object().shape({
		code: Yup.number().typeError("solo números").required('Campo obligatorio'),
	});

	const onSubmit = () => {
		alert("llama al servicio para validar el código")
	}

	return(
		<Box  className={styles.container}>
				<Typography className={styles.maintitle}>
					{type === "client" ? "Mis compras" : "Mis ventas"}
				</Typography>
			<Box className={styles.cardwrapper}>
				{salesList.map((sale) => (
				<Paper className={styles.card}>
					<Box className={styles.datacontainer}>
						<Typography className={styles.title}>Fecha</Typography>
						<Typography className={styles.text}>{sale.date}</Typography>
					</Box>
					<Box className={styles.datacontainer}>
						<Typography className={styles.title}>Box</Typography>
						<Typography className={styles.text}>{sale.boxName}</Typography>
					</Box>
					<Box className={styles.datacontainer}>
						<Typography className={styles.title}>Comercio</Typography>
						<Typography className={styles.text}>{sale.businessName}</Typography>
					</Box>
					<Box className={styles.datacontainer}>
						<Typography className={styles.title}>Usuario</Typography>
						<Typography className={styles.text}>{sale.buyer}</Typography>
					</Box>
					<Box>
						{type === "client" ? (
							<Box className={styles.datacontainer}>
							<Typography className={styles.title}>Código</Typography>
							<Typography className={styles.data}>{sale.code}</Typography>
							</Box>
						) : (
							<Box className={styles.datacontainer}>
							<Formik
								initialValues={{
									code: sale.code,
								}}
								validationSchema={VALIDATION}
								onSubmit={onSubmit}
								// innerRef={formikRef}
							>
								{(formik) => (
									<Form>
										<Box className={styles.formikcontainer}>
											<CTextField
												name="code"
												label='Código'
												fullWidth= {false}
												formik={formik}
												className={styles.data}
												disabled={formik.initialValues.code !==""}
											/>
											{formik.initialValues.code ==="" && (
												<CButton
													title="Validar"
													onClick={formik.handleSubmit}
												/>
											)}	
										</Box>
									</Form>
								)}
							</Formik>
							</Box>
						)}
					</Box>
					<Box className={styles.datacontainer}>
						{sale.delivered ? (
							<Typography p="0 0.5rem" className={styles.statedelivered}>Entregado</Typography>
						): (
							<Typography p="0 0.5rem" className={styles.statepending}> Entrega Pendiente</Typography>
						)}
					</Box>
				</Paper>
				))}
			</Box>
		</Box>
	);
};

export default Sales;
