import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthService from '../services/auth.service';

const InfoScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      console.log('Antes de llamar a AuthService.logout()');
      await AuthService.logout();
      console.log('Después de llamar a AuthService.logout()');
      // La sesión se cerró exitosamente, redirigir a la pantalla de inicio de sesión
      navigation.replace('Login');
      Alert.alert('Logout', 'Sesión cerrada exitosamente');
    } catch (error) {
      // Hubo un error al cerrar la sesión
      Alert.alert('Error', 'Hubo un error al cerrar la sesión');
      console.log('Error al cerrar sesión:', error);
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoScreen;




