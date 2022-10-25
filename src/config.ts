const dev = {
	API_BASE_URL: 'https://39059942-review-feature-se-lopuqz.34.78.209.95.nip.io/api',
};

const prod = {
	API_BASE_URL: '',
};

const config = process.env.REACT_APP_ENV === 'prod' ? prod : dev;

export default config;
