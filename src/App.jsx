import React from 'react';
// import { LoadingProvider } from 'context/LoaderContext';
// import { SnackbarProvider } from 'context/SnackbarContext';
// import { ModalProvider } from 'context/ModalContext';

import { ThemeProvider, Box } from '@mui/material';
import CRoutes from './routes/CRoutes';
import theme from './themes/themeConfig';
// import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
			<Box>
				{/* <UserProvider> */}
				  <CRoutes />
				{/* </UserProvider> */}
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
