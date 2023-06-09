const globals = {
  API_BASE_URL: import.meta.env.VITE_API_URL,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};

const development = {
  ...globals,
};

const production = {
  ...globals,
};

const config = import.meta.env.PROD ? production : development;

console.log(`Application paramétrée avec l'API : ${config.API_BASE_URL}`);

export default config;
