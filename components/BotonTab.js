import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Contacto from "../recursos/pantallas/Contacto";
import Promos from "../recursos/pantallas/Promos";
import Turnos from "../recursos/pantallas/Turnos"
import { Header } from "react-native/Libraries/NewAppScreen";



const Tab = createMaterialBottomTabNavigator();

export const BotonTab = () =>{
    return(
        <Tab.Navigator 
                initialRouteName="Home"
                activeColor="#0000FF"
                inactiveColor="#FF4000"
                barStyle={{ backgroundColor: '#1d1d1d' }}

        >
        
            <Tab.Screen 
                name = 'Turnos'
                component = {Turnos}

            />
                         <Tab.Screen 
                name = 'Promociones'
                component = {Promos}
            />
            <Tab.Screen 
                name = 'Contactanos'
                component = {Contacto}
            />
        </Tab.Navigator>
    )

}




