import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// rotas
import Login from './telas/Login';
import Recuperar_senha from './telas/recuperar_senha';
import Recuperar_acesso from './telas/recuperacao_acesso';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Entrar">
      <Drawer.Screen name="Entrar" component={Login} />
      <Drawer.Screen name="Recuperar Senha" component={Recuperar_senha} />
      <Drawer.Screen name="Recuperar Acesso" component={Recuperar_acesso} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
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