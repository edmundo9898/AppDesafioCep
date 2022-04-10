import React, { useState, useRef } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';

import api from './api';

export default function Consulta(){

    const [cep , setCep] = useState('')
    const inputRef = useRef(null);
    const [cepUser, setCepUser] = useState(null);
  
     function btnLimpar(){
       setCep('')
       inputRef.current.focus();
       setCepUser(null);
     }
    async function btnBuscar(){
        if(cep == ''){
            alert('Campo Vazio !! Favor informar um CEP')
            setCep('')
            return;
        }
        
        try{
            const response = await api.get(`/${cep}/json`)
            setCepUser(response.data) 

            Keyboard.dismiss(); //Garantir que o teclado será fechado
        }catch(error){
            console.log('ERROR' + error);
        }
            
    }

    

    return(

        <View style={styles.container}>
                <TextInput
                placeholder='Digite seu CEP'
                style={styles.inputTxt}
                value={cep}
                onChangeText={(texto) => setCep(texto) }
                keyboardType='numeric'
                ref={inputRef}
                />

            <View style={styles.containerBtn}>    
                    <TouchableOpacity style={[styles.btnArea, {backgroundColor: '#ff5c33'}]} onPress={btnBuscar}>
                        <Text style={styles.btnTxt}>Buscar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btnArea, {backgroundColor: '#00b33c'}]} onPress={btnLimpar}>
                        <Text style={styles.btnTxt}>Limpar</Text>
                    </TouchableOpacity>       
            </View>

             {cepUser &&
            <View style={styles.containerResult}>
                <Text style={styles.infoConsult}>CEP: {cepUser.cep}</Text>
                <Text style={styles.infoConsult}>Rua : {cepUser.logradouro}</Text>
                <Text style={styles.infoConsult}>Bairro : {cepUser.bairro}</Text>
                <Text style={styles.infoConsult}>Cidade : {cepUser.localidade}</Text>
                <Text style={styles.infoConsult}>Estado : {cepUser.uf}</Text>
                

            </View>
            }
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
      
    },
    inputTxt:{
        borderBottomWidth: 1,
        width: '70%',
        height: 35,
        textAlign: 'left',
        paddingLeft: 10 ,
        marginTop: 40,
        marginBottom: 10,
        fontSize: 20,
        color: '#000',
    },
    containerBtn:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnArea:{
        borderWidth: 1,
        width: 100,
        height: 50,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    btnTxt:{
        color: '#fff',
    },
    containerResult:{
        width: 350,
        height: 250,
        backgroundColor: 'orange',
        marginTop: 40,
        borderRadius: 10,
        alignItems: 'flex-start',
       
    },
    infoConsult:{
        color: '#fff',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    }

})