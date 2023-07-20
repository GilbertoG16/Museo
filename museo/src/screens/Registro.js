import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AuthService from '../services/auth.service';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  /*-- Agregados :) --*/
  const [name, setName] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [identification, setIdentification] = useState('');
  const [birth_date, setBirth_date] = useState('');
  

  const onChangeUsername = (text) => {
    setUsername(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangeName= (text) => {
    setName(text);
  };

  const onChangeLast_Name = (text) => {
    setLast_Name(text);
  };

  const onChangeIdentification = (text) => {
    setIdentification(text);
  };

  const onChangeBirth_date = (text) => {
    setBirth_date(text);
  };


  const onChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
  };

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

  if (password !== confirmPassword) {
    Alert.alert('Error', 'Las contraseñas no coinciden');
    return;
  }

  AuthService.register(username, email, password, name, last_name, identification, birth_date)
    .then(() => {
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
      setLast_Name('');
      setIdentification('');
      setBirth_date('');
      Alert.alert('Registro exitoso', '¡Te has registrado correctamente!');
    })
    .catch((error) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
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
        placeholder="Correo electrónico"
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={onChangePassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="nombre"
       
        value={name}
        onChangeText={onChangeName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
   
        value={last_name}
        onChangeText={onChangeLast_Name}
      />
      <TextInput
        style={styles.input}
        placeholder="cédula"
      
        value={identification}
        onChangeText={onChangeIdentification}
      />
      <TextInput
        style={styles.input}
        placeholder="Cumpleaños"
      
        value={birth_date}
        onChangeText={onChangeBirth_date}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
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

export default Registro;