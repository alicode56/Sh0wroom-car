import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'

const Registeration = ({navigation}) => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black',
                fontStyle: 'italic',
                fontSize: 20,
                borderWidth: 1
            }}>
                Get Regieteration details for Vehicle</Text>


            <View style={style.container3}>
                <ScrollView>

                    <Text style={style.text8}>
                        Owner name</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Mobile number</Text>
                    <TextInput style={style.text3}
                        placeholder='' />


                    <Text style={style.text8}>
                        Email</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Adrees</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Vechile Model</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Vechile class</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Makers class</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Fuel used</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                    <Text style={style.text8}>
                        Engine CC</Text>
                    <TextInput style={style.text3}
                        placeholder='' />

                        <View style={{flexDirection:'row',
                        justifyContent:'space-around'}}>
                            <TouchableOpacity style={{width: '40%',
                        alignSelf: 'center',
                        elevation: 30,
                        borderColor: 'red',
                        borderRadius: 14,
                        padding: 12,
                        elevation:8,
                        backgroundColor:'white',
                        // backgroundColor: '#73C6B6',
                         margin: 6}}> 
                         <Text style={{fontWeight:'bold',
                         color:"black",
                         textAlign:'center'}}>
                            Upload Image</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={{width: '40%',
                        alignSelf: 'center',
                        elevation: 30,
                        borderColor: 'red',
                        borderRadius: 14,
                        padding: 12,
                        elevation:8,
                        backgroundColor:'white',
                        // backgroundColor: '#73C6B6',
                         margin: 6}}>
                             <Text style={{fontWeight:'bold',
                             color:"black",
                             textAlign:'center'}}>
                            Upload documents</Text>

                            </TouchableOpacity>
                        </View>

                    <TouchableOpacity style={{
                        width: '80%',
                        alignSelf: 'center',
                        elevation: 30,
                        borderColor: 'red',
                        borderRadius: 14,
                        padding: 12,
                        backgroundColor:'red',
                        // backgroundColor: '#73C6B6',

                        margin: 6
                    }}onPress={()=>navigation.navigate('Main')}>

                        <Text style={{ textAlign: 'center' }}>Subbmit</Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>

        </View>
    )
}
const style = StyleSheet.create({
    container3: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 40,
        alignSelf:'center',
        // flexDirection:'row'
    },
    text3: {
        width: '90%',
        elevation: 40,
        borderRadius: 10,
        textAlign: 'center',
        margin: 3,
        marginLeft:20,
        backgroundColor:'white'


    },
        text8:{
                       fontWeight: 'bold',
                        fontSize: 15,
                        marginLeft: '7%'


    }

})

export default Registeration