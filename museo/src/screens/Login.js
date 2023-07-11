import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthService from '../services/auth.service';

const Login = () => {
  const navigation = useNavigation();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si el usuario ya ha iniciado sesión
    AuthService.getCurrentUser()
      .then((user) => {
        if (user) {
          // El usuario está autenticado, redirigir a la pantalla de inicio
          navigation.navigate('HomeScreen');
        } else {
          // El usuario no está autenticado
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const onChangeUsername = (text) => {
    setUserName(text);
  }

  const onChangePassword = (text) => {
    setPassword(text);
  }

  const handleLogin = () => {
    AuthService.login(username, password)
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        Alert.alert('Error', resMessage);
      });
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  const handleResetPassword = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  if (isLoading) {
    return null; // Puedes mostrar un spinner de carga mientras se verifica la autenticación
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={username}
        onChangeText={onChangeUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={onChangePassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Recuperar Contraseña</Text>
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

export default Login;


