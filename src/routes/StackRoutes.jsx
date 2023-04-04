import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Detail } from '../screens/Detail';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';



const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name='Detail' 
      component={Detail} 
      options={{
        title: 'Detalhes da Receita'
      }}
      />
      <Stack.Screen 
      name='Search'
      component={Search}
      options={{
        title: 'Receitas Encontradas'
      }}
       
       />
    </Stack.Navigator>
  );
}