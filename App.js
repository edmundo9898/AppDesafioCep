import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Consulta from './src/pages/Consulta';
import Sobre from './src/pages/Sobre';




const Stack = createNativeStackNavigator();

export default function App(){

  return(

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
         options={{
           headerShown: false,
         }}
        />
        <Stack.Screen name='Consulta' component={Consulta} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}