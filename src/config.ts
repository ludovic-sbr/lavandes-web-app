const globals = {
	API_BASE_URL: import.meta.env.VITE_API_URL,
};

const development = {
	...globals,
};

const production = {
	...globals,
};

const config = development;

console.log(`Application paramétrée avec l'API : ${config.API_BASE_URL}`);

export default config;
