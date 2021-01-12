import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Meta from './pages/Meta';
import AddMeta from './pages/AddMeta';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: '#171941',
    },
    headerTintColor: '#bf38ac',
    headerBackTitle: 'voltar',
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptionStyle}>
        <Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Dashboard',
          }}
        />
        <Screen
          name="Meta"
          component={Meta}
          options={{
            headerTitle: 'Listar Metas',
          }}
        />
        <Screen
          name="AddMeta"
          component={AddMeta}
          options={{
            headerTitle: 'Cadastrar Metas',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
