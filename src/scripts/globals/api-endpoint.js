/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  CATALOGUE: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
