import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, Alert, Platform, } from "react-native";
import style from "../estilos/Estilos";
import Boton from "../../components/Boton";

const Turnos = ({ navigation }) => {
    return (

        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#2d2d2d',
            }}>

            <View style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 15,
            }} >

                <Text
                    style={style.textHeader}
                >
                    Solicitar un Turno

                </Text>

                <Text
                    style={style.text}
                >
                    Correo Electronico
                </Text>

                <TextInput
                    style={style.Input}
                />

                <Text
                    style={style.text}
                >
                    Marca del Vehiculo
                </Text>

                <TextInput
                    style={style.Input}
                />

                <Text
                    style={style.text}
                >
                    Modelo del Vihiculo
                </Text>

                <TextInput
                    style={style.Input}
                />


                <Boton
                    text="Solicitar Turno"
                    onPress={() => {
                        Alert.alert("La fecha del turno se le enviara a su correo Electronico")
                        navigation.navigate('');

                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Turnos