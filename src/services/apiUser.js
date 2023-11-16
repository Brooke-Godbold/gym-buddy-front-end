import axios from 'axios';

async function getAuthenticatedUser() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/users`,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    if (err.response.status !== 401 && err.response.status !== 403)
      throw new Error(err.message);
  }
}

export { getAuthenticatedUser };
