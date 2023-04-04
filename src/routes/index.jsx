import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorities } from '../screens/Favorities';
import { Home } from '../screens/Home';

import { Ionicons } from '@expo/vector-icons'





const Tab = createBottomTabNavigator();


export function Routes(){
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#121212",

      tabBarStyle:{
        backgroundColor: "#FFF",
        borderTopWidth: 0
      }
      
    }}>
        <Tab.Screen name='HomeTab' component={Home} options={{
          tabBarIcon: ({color, size, focused}) => {
           if(focused){
            return <Ionicons name='home' color='#000' size={size} />
           } 
        
    return <Ionicons name='home-outline' color={color} size={size} />
        
        }}} 
        
        />
        <Tab.Screen name='FavoritiesTab' component={Favorities}
        options={{
          tabBarIcon: ({color, size, focused}) => {
           if(focused){
            return <Ionicons name='heart' color='#f30808' size={size} />
           } 
        
    return <Ionicons name='heart-outline' color={color} size={size} />
        
        }}} 
        
        
        
        />
    </Tab.Navigator>
  )
}