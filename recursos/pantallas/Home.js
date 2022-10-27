import React from "react";
import { View, Text, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "../../components/Boton";
import style from '../estilos/Estilos'

const Home = ({navigation}) => {
 
  return (
    <SafeAreaView style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center', backgroundColor: '#2d2d2d',
    }}>

      <View>
        <Text
          style={style.textHeader}
        >
          TALLER DE AUTOS HIBRIDOS Y ELECTRICOS
        </Text>
        <Image
          source={require('../imagenes/logo.jpeg')}
          style={{ width: 150, height: 170, alignSelf: 'center' }}
          resizeMode='cover'
        />

        <Text
          style={style.text}
        >
          Usuario
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

        <Boton
          text="Ingresar"
          onPress={() => {
            navigation.navigate('BotonTab');
          }}
        />
        <Boton
          text="Crear Usuario"
          onPress={() => {
            navigation.navigate('CrearUser');

          }}
        />
      </View>
    </SafeAreaView>
  )

}

export default Home