const baseURL = (
  process.env.API_HOST &&
  process.env.API_PORT &&
  `${process.env.API_HOST}:${process.env.API_PORT}`
) || 'localhost:3002';

export const baseUrl = `http://${baseURL}`;

export default {
  baseUrl,
};
