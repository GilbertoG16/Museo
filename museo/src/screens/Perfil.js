import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AuthService from '../services/auth.service';

const Perfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userProfile = await AuthService.getUserProfile();
      console.log(userProfile)
      setUser(userProfile);
    } catch (error) {
      console.log('Error al obtener el perfil del usuario:', error);
    }
  };

  return (
    <View>
      {user ? (
        <View>
          <Text>Nombre de usuario: {user.username}</Text>
          <Text>Correo electrónico: {user.email}</Text>
          <Text>Nombre: {user.name}</Text>
          <Text>Apellido: {user.last_name}</Text>
          <Text>Identificación: {user.identification}</Text>
          <Text>Fecha de nacimiento: {user.birth_date}</Text>
          {/* Mostrar otros datos del perfil del usuario */}
        </View>
      ) : (
        <Text>Cargando perfil...</Text>
      )}
    </View>
  );
};

export default Perfil;

