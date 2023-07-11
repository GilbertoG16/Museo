import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const API_URL = 'http://172.29.34.134:8080/api/auth/';
const API_PERFIL = 'http://172.29.34.134:8080/api/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'signup', { username, email, password });
};

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + 'signin', { username, password });
    if (response.data.accessToken) {
      await SecureStore.setItemAsync('accessToken', JSON.stringify(response.data.accessToken));
      await SecureStore.setItemAsync('user', JSON.stringify(response.data));
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await SecureStore.deleteItemAsync('accessToken');
    await SecureStore.deleteItemAsync('user');
    const response = await axios.post(API_URL + 'signout');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPass = async (username, newPassword) => {
  try {
    const response = await axios.put(API_URL + 'forgotpassword', { username, newPassword });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const user = await SecureStore.getItemAsync('user');
    const token = await SecureStore.getItemAsync('accessToken');
    console.log("aquí el normalito compita", token);
    console.log(user ? JSON.parse(user) : null);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    throw error;
  }
};

const getUserProfile = async () => {
  try {
    const user = await getCurrentUser();
    const accessToken = await SecureStore.getItemAsync('accessToken');

    console.log('Valor del accessToken:', accessToken); // Imprimir el valor del accessToken

    if (user && accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };

      const response = await axios.get(`${API_PERFIL}user/perfil`, { headers });

      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('Error al obtener el perfil del usuario:', error);
    throw error;
  }
};

const AuthService = {
  register,
  login,
  logout,
  resetPass,
  getCurrentUser,
  getUserProfile
};

export default AuthService;



