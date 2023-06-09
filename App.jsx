import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </NavigationContainer>
  )
}


