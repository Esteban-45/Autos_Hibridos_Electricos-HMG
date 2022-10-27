import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pantallas/Home";
import Turnos from "../pantallas/Turnos";
import style from "../estilos/Estilos";
import CrearUser from "../pantallas/CrearUser";
import prueba from "../pantallas/prueba";
import { BotonTab } from "../../components/BotonTab";
const Stack = createNativeStackNavigator()

const MainStack = () =>{


        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,


                }}

            >

                <Stack.Screen
                    name="Home"
                    component={Home}

                />
                
                <Stack.Screen
                    name = "BotonTab"
                    component={BotonTab}
                />

                <Stack.Screen
                    name="Turnos"
                    component={Turnos}

                />
                <Stack.Screen
                    name="CrearUser"
                    component={CrearUser}

                />
            </Stack.Navigator>
        )
    }
export default MainStack