import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, Alert } from "react-native";
import style from "../estilos/Estilos";
import Boton from "../../components/Boton";

const CrearUser = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center', backgroundColor: '#2d2d2d',
        }}>

            <View>
                <Text
                    style={style.textHeaderUser}
                >
                    REGISTRARSE
                </Text>
                <Image
                    source={require('../imagenes/logo.jpeg')}
                    style={{ width: 100, height: 100, alignSelf: 'center' }}
                    resizeMode='cover'
                />

                <Text
                    style={style.text}
                >
                    Correo
                </Text>
                <TextInput
                    style={style.Input}
                />
                <Text
                    style={style.text}
                >
                    Nombre de Usuario
                </Text>
                <TextInput
                    style={style.Input}
                />
                <Text
                    style={style.text}
                >
                    Contraseña
                </Text>
                <TextInput
                    style={style.Input}
                />
                <Text
                    style={style.text}
                >
                    Confirme su Contraseña
                </Text>
                <TextInput
                    style={style.Input}
                />

                <Boton
                    text="Registrarse"
                    onPress={() => {
                        Alert.alert ("Usuario creado con exito")
                        navigation.navigate('Home');

                    }}
                />
            </View>
        </SafeAreaView>
    )

}

export default CrearUser