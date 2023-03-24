import PropTypes from 'prop-types';

const FORMIK_PROPTYPES = {
  values: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  setFieldValue: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.any),
  touched: PropTypes.objectOf(PropTypes.any)
};

export default FORMIK_PROPTYPES;
