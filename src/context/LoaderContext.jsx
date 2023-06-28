import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/layout/Spinner/Spinner';

const LoaderContext = createContext({
  loading: false,
  setLoading: null
});

const LoadingProvider = function ({ children }) {
  const [loading, setLoading] = useState(false);
  const value = useMemo(() => ({ loading, setLoading }), [LoaderContext]);
  return (
    <LoaderContext.Provider value={value}>
      <Spinner open={loading} />
      {children}
    </LoaderContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export {
  LoaderContext,
  LoadingProvider
};
