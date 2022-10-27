import React from'react';
import { ActivityIndicatorBase, View } from 'react-native';

const carga = ({carga, children}) =>{
    if (carga){
        return(
            <View style={style.carga}>
                 <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )

    }
}

export default carga        
