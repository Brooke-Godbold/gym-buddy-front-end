import axios from 'axios';

const POSTCODES_IO_URL = 'https://api.postcodes.io/postcodes';

async function getPostcode(lon, lat) {
  try {
    const response = await axios.get(`${POSTCODES_IO_URL}`, {
      params: { lon, lat },
    });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { getPostcode };
