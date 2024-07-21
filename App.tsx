import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Main from './Screen/Main';
import Bmw from './Screen/Bmw';
import Fortuner from './Screen/Fortuner';
import Toyta from './Screen/Toyta';
import Corola from './Screen/Corola';
import Audi from './Screen/Audi';
import Seeting from './Screen/Seeting';
import Registeration from './Screen/Registeration';
import Peofile from './Screen/Peofile';
import Forgot from './Screen/Forgot';

const mainStack=createNativeStackNavigator()
const App = () => {
  return (
 <NavigationContainer>
  <mainStack.Navigator>
    <mainStack.Screen name=' Login' component={Login}></mainStack.Screen>
    <mainStack.Screen name='Signup' component={Signup}></mainStack.Screen>
    <mainStack.Screen name='Main' component={Main}></mainStack.Screen>
    <mainStack.Screen name='Bmw' component={Bmw}></mainStack.Screen>
    <mainStack.Screen name='Fortuner' component={Fortuner}></mainStack.Screen>
    <mainStack.Screen name='Toyta' component={Toyta}></mainStack.Screen>
    <mainStack.Screen name='Corola' component={Corola}></mainStack.Screen>
    <mainStack.Screen name=' Audi' component={ Audi}></mainStack.Screen>
    <mainStack.Screen name='Seeting' component={Seeting}></mainStack.Screen>
    <mainStack.Screen name='Registeration' component={Registeration}></mainStack.Screen>
    <mainStack.Screen name='Peofile' component={Peofile}></mainStack.Screen>
    <mainStack.Screen name='Forgot' component={Forgot}></mainStack.Screen>
  </mainStack.Navigator>
 </NavigationContainer>
  )
}

export default App








// import React from 'react';
// import { View,Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from "./Screen/Login"

// const mainStack=createNativeStackNavigator()
// const App = () => {
//   return (
//  <NavigationContainer>
//   <mainStack.Navigator>
//  <mainStack.Screen name='Login' component={Login}></mainStack.Screen>
//   </mainStack.Navigator>
//  </NavigationContainer>
//   )
// }

// export default App

