import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  useEffect(() => {
    const checkUserToken = async () => {
      const userToken = await SecureStore.getItemAsync('userToken');

      if (userToken) {
        const decodedJwt = parseJwt(userToken);

        if (decodedJwt.exp * 1000 < Date.now()) {
          // Realizar acciones de cierre de sesión, como eliminar el token almacenado
          await SecureStore.deleteItemAsync('userToken');
        }
      }
    };

    checkUserToken();
  }, []);

  return null;
};

export default AuthVerify;



