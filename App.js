import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainStack from './recursos/navegacion/MainStack';
import style from './recursos/estilos/Estilos'



function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
};

export default App 