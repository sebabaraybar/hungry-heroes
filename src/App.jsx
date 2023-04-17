import React from 'react';
// import { LoadingProvider } from 'context/LoaderContext';
// import { SnackbarProvider } from 'context/SnackbarContext';
// import { ModalProvider } from 'context/ModalContext';

import { ThemeProvider, Box } from '@mui/material';
import CRoutes from './routes/CRoutes';
import theme from './themes/themeConfig';
import LoginPage from './pages/LoginPage';
import BoxPage from './pages/BoxPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
			<Box>
				<CRoutes />
			</Box>
    {/*<ModalProvider>
    //       <LoadingProvider>
    //         <SnackbarProvider>
    //           <CRoutes />
    //         </SnackbarProvider>
    //       </LoadingProvider>
	//     </ModalProvider> */}
    </ThemeProvider>
  );
}

export default App;
