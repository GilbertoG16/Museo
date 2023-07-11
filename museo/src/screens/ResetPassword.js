import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AuthService from '../services/auth.service';

const ResetPassword = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangeUsername = (text) => {
    setUsername(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
  };

  const handleResetPassword = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    AuthService.resetPass(username, password)
      .then(() => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        Alert.alert('Contraseña cambiada', '¡Tu contraseña ha sido cambiada exitosamente!');
      })
      .catch((error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        Alert.alert('Error', resMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={onChangeUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva contraseña"
        
        value={password}
        onChangeText={onChangePassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
       
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResetPassword;
