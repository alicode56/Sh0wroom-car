import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'

const Forgot = ({navigation}) => {
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <Text style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 12
            }}>
                Enter Email adressS</Text>

              
        <TextInput
          style={styles.text}
          placeholder='exaple@gamil.com' 
          />
         <Text style={{
                color: 'black',
                textAlign: 'center',
            
            }}>
                back to Signin</Text>

                <TouchableOpacity style={{
          width: '70%',
          alignSelf: 'center',
        //   elevation: 20,
          borderRadius: 70,
          padding: 12,
          margin: 6,
          backgroundColor:'gray'
        }}
        //   onPress={() => navigation.navigate('Main')}
          >

          <Text style={{ textAlign: 'center' }}>Send</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row',
       alignSelf: 'center'
       ,marginTop:12
        
         }}>
        <Text style={{ color: "red" }}>If you Dont receive code.?</Text>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Signup')}
          >
          <Text style={{
            fontWeight: 'bold',
            fontSize: 15, color: 'black'
          }}>Resend</Text>
        </TouchableOpacity>
      </View> 
               
      <Text style={{
                color: 'black',
                fontWeight: 'bold',
                marginLeft:15,
                marginTop: 12
            }}>
                Enter your verification code</Text>
                        
        <TextInput
          style={styles.text}
          placeholder='exaple@12345' 
          />

<Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}>set new Passworod</Text>

<Text style={{
                color: 'black',
                fontWeight: 'bold',
                marginLeft:15,
                marginTop: 12
            }}>
                Enter New password</Text>
                        
        <TextInput
          style={styles.text}
          placeholder='exaple@12345' 
          />

<Text style={{
                color: 'black',
                fontWeight: 'bold',
                marginLeft:15,
                marginTop: 12
            }}>
                confirm new Password</Text>
                        
        <TextInput
          style={styles.text}
          placeholder='exaple@12345' 
          />

          
<TouchableOpacity style={{
          width: '70%',
          alignSelf: 'center',
        //   elevation: 20,
          borderRadius: 70,
          padding: 12,
          marginTop: 20,
          backgroundColor:'red'
        }}
          onPress={() =>navigation.navigate('Signup')}
          >

          <Text style={{ textAlign: 'center' }}>Save/Login</Text>
        </TouchableOpacity>
        </View>
    )
}


export default Forgot;

const styles = StyleSheet.create({
    text: {
      width: '70%',
      alignSelf: 'center',
  borderWidth:1,
      borderRadius: 70,
      textAlign: 'left',
      marginLeft:15,
      margin: 6,
    //   textAlign:'center',
    paddingLeft:15,
    //   backgroundColor: 'red'
    }
}
    )