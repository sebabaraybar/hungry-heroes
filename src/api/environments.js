// eslint-disable-next-line import/no-anonymous-default-export
export default {
	API_BASE_URL: process.env.REACT_APP_API_URL,
	NODE_ENV: process.env.NODE_ENV,
	IS_DEVELOPMENT: process.env.NODE_ENV !== 'production'
};