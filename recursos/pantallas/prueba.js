import React ,{useState,} from'react';
import { View, Text, TextInput} from 'react-native';
import Boton from '../../components/Boton';

const prueba = () =>{
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>
                vos clicaste {count} veces
            </Text>
            <Boton
                onPress ={() => setCount(count + 1)}
                title = "puto"
            />
            <TextInput
                onChangeText={(value) => setCount(value)}
            />
        </View>
    )
}

export default prueba








