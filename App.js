<<<<<<< HEAD
import { StyleSheet } from 'react-native';
=======
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
>>>>>>> origin/main
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

<<<<<<< HEAD
// rotas
import Cadastro from './telas/Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Cadastro} />
=======
// telas
import Login from './telas/Login';
import Recuperar_senha from './telas/recuperar_senha';
import Recuperar_acesso from './telas/recuperacao_acesso';
import Home from './telas/Home';
import AceitarTermo from './telas/aceitarTermo';
import Perfil from './telas/perfil';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="Entrar" 
        component={Login} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="Recuperar Senha" 
        component={Recuperar_senha}
        options={{
          title: 'UNIFAE Care',
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTintColor: 'green',
        }}
      />

      <Stack.Screen 
        name="Recuperar Acesso" 
        component={Recuperar_acesso}
        options={{
          title: 'UNIFAE Care',
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTintColor: 'green',
        }}
      />

      <Stack.Screen 
        name="AceitarTermo" 
        component={AceitarTermo}
        options={{
          title: 'UNIFAE Care',
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTintColor: 'green',
        }}
      />
    </Stack.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'green',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
>>>>>>> origin/main
    </Drawer.Navigator>
  );
}

export default function App() {
<<<<<<< HEAD
  return (
    <NavigationContainer>
      <DrawerRoutes />
=======
  const [isLogged, setIsLogged] = useState(false);

  return (
    <NavigationContainer>
      {isLogged ? <AppDrawer /> : <AuthStack />}
>>>>>>> origin/main
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});