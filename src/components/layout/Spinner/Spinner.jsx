import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

// import themeConst from 'themes/themeConst';

const Spinner = function ({ open }) {
  return (
    <Backdrop
      // sx={{ color: themeConst.primary, zIndex: 10000 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Spinner.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Spinner;
