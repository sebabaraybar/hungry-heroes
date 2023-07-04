import React from 'react';
// import { SnackbarProvider } from 'context/SnackbarContext';
// import { ModalProvider } from 'context/ModalContext';

import { ThemeProvider, Box } from '@mui/material';
import CRoutes from './routes/CRoutes';
import theme from './themes/themeConfig';
// import { UserProvider } from './context/UserContext';
import { LoadingProvider } from './context/LoaderContext';
import { SnackbarProvider } from './context/SnackbarContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
			<Box>
				<LoadingProvider>
					<SnackbarProvider>
				    <CRoutes />
					</SnackbarProvider>
				</LoadingProvider>
			</Box>
    </ThemeProvider>
  );
}

export default App;
