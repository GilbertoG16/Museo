
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Registro from '../screens/Registro';
import Login from '../screens/Login';

import TabScreen from './TabScreen';
import ResetPassword from '../screens/ResetPassword';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Registro"
            component={Registro}
            options={{}}
        />

        <Stack.Screen
            name="HomeScreen"
            component={TabScreen}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPassword}
            options={{}}
        />
        
    </Stack.Navigator>
  )
}

export default AuthStack;