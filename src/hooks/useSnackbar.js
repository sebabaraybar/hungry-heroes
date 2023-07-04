import { useContext } from 'react';
import { SnackbarContext } from '../context/SnackbarContext';

export default function useSnackbar() {
  const context = useContext(SnackbarContext);
  return context.setSnackbar;
}
