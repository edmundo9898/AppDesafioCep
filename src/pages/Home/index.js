import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';



export default function Home(){
    const navigation = useNavigation();

    function consultarCep(){
        navigation.navigate('Consulta');
    }

    function sobreApp(){
        navigation.navigate('Sobre');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.tituloPag}>CEP EdX</Text>
        
           <TouchableOpacity style={styles.btnArea}
           onPress={consultarCep}
           >
               <Text style={styles.btnText}>Consultar o CEP</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btnArea}
           onPress={sobreApp}
           >
               <Text style={styles.btnText}>Sobre o APP</Text>
           </TouchableOpacity>

        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e68a00'
        
    },
    tituloPag:{
        color: '#fff' ,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        
    },
    btnArea:{
        width: '70%',
        height: 50,
        borderWidth: 1,
        borderRadius: 20 ,
        borderColor: '#fff',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText:{
        color: '#ffff',
        fontSize: 18,
    }


    
})