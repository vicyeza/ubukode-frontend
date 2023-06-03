import axios from "axios";

const UBUKODE_API_BASE_URL = "http://localhost:9090/api/user/";

class UbukodeService {

  getAllUsers() {
    return axios.get(UBUKODE_API_BASE_URL);
  }

  createUsers(user) {
    return axios.post(UBUKODE_API_BASE_URL, user);
  }

  getUserById(userId) {
    return axios.get(UBUKODE_API_BASE_URL + "/" + userId);
  }

  updateUsers(user, userId) {
    return axios.put(UBUKODE_API_BASE_URL + "/" + userId, user);
  }

  deleteUsers(userId) {
    return axios.delete(UBUKODE_API_BASE_URL + "/" + userId);
  }
}

export default new UbukodeService();