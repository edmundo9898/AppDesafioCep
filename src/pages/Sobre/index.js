import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Sobre(){

    return(

        <View style={styles.container}> 
            <View style={styles.containerSobre}>
                <Text style={styles.sobreApp}>
                  App feito pelo estudante de Programação Edmundo Roberto para praticar
                  o conhecimento em Programação Mobile Utilizando o FrameWork React-Native.
                </Text>
                <Text style={[styles.sobreApp, {marginTop: 20,}]}>
                    Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem
                </Text>

                <Text style={[styles.sobreApp, {marginTop: 20,}]}>
                    Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem
                </Text>
                <Text style={[styles.sobreApp, {marginTop: 20,}]}>
                    Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem  Lorem Ipsum Lorem Lorem
                </Text>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    containerSobre:{
        width: '90%',
        height: 530,
        marginTop: 40,
        borderRadius: 10 ,
        backgroundColor: 'orange',
        padding: 15,
    },
    sobreApp:{
        fontSize: 20,
        textAlign: 'justify',
        lineHeight: 25,
        color:  '#fff',
       
    }
})