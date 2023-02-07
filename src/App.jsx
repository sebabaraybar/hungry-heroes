import React from 'react';
// import { LoadingProvider } from 'context/LoaderContext';
// import { SnackbarProvider } from 'context/SnackbarContext';
// import { ModalProvider } from 'context/ModalContext';

// import { ThemeProvider, Box } from '@mui/material';
// import theme from 'themes/themeConfig';

// import MRoutes from 'routes/MRoutes';

// import styles from './App.module.scss';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Box className={styles.app}>
    //     <ModalProvider>
    //       <LoadingProvider>
    //         <SnackbarProvider>
    //           <MRoutes />
    //         </SnackbarProvider>
    //       </LoadingProvider>
    //     </ModalProvider>
    //   </Box>
    // </ThemeProvider>
    <LoginPage />
  );
}

export default App;
