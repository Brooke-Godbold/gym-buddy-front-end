import axios from 'axios';

async function getIsAuthenticated() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/auth`,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function postLogout() {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { getIsAuthenticated, postLogout };
