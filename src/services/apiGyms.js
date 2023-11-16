import axios from 'axios';

async function getGyms(searchQuery, limit) {
  console.log('A: ', searchQuery, limit);
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms`,
      { params: { search: searchQuery, limit: limit } }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getGymById(gymId) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms/${gymId}`
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function addGym(gymData) {
  try {
    const response = axios.post(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms`,
      gymData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getReviews(limit) {
  try {
    const response = axios.get(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms/reviews?limit=${limit}`
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function addReview(gymId, reviewData) {
  try {
    const response = axios.put(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms/${gymId}/reviews`,
      reviewData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function voteReview(reviewId, voteData) {
  try {
    const response = axios.patch(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms/reviews/${reviewId}`,
      voteData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function addEquipment(gymId, equipmentData) {
  try {
    const response = axios.post(
      `${import.meta.env.VITE_GYM_BUDDY_API_URL}/gyms/${gymId}/equipment`,
      equipmentData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function rateEquipment(equipmentId, qualityData) {
  try {
    const response = axios.put(
      `${
        import.meta.env.VITE_GYM_BUDDY_API_URL
      }/gyms/equipment/${equipmentId}/quality`,
      qualityData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function voteEquipment(equipmentId, accuracyData) {
  try {
    const response = axios.put(
      `${
        import.meta.env.VITE_GYM_BUDDY_API_URL
      }/gyms/equipment/${equipmentId}/accuracy`,
      accuracyData,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}

export {
  getGyms,
  getGymById,
  addGym,
  getReviews,
  addReview,
  voteReview,
  addEquipment,
  rateEquipment,
  voteEquipment,
};
