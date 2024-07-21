import React from 'react'
import { View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
   KeyboardAvoidingView,
   Platform,
   ScrollView,} from 'react-native'
import Swiper from 'react-native-swiper'


const Signup = ({ navigation }) => {
  return (
   
    <KeyboardAvoidingView
    enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{
        flex: 1,
        }}>
         
      
          

<View
       style={{height:'30%',width:'100%', }}>
    
        <Swiper autoplay={true}>
          <Image source={require('../assests/t4.jpeg')}
            style={{ width: '100%', height: '100%' }} />

          <Image source={require('../assests/t2.jpeg')}
            style={{ width: '100%', height: '100%' }} />

          <Image source={require('../assests/t3.jpeg')}
            style={{ width: '100%', height: '100%' }} />

          <Image source={require('../assests/c2.jpeg')}
            style={{ width: '100%', height: '100%' }} />

          <Image source={require('../assests/f1.jpg')}
            style={{ width: '100%', height: '100%' }} />

          <Image source={require('../assests/nmwlgn.jpg')}
            style={{ width: '100%', height: '100%' }} />

        </Swiper>
      </View>

 

      <ScrollView>
      <View style={{ height:'80%', marginTop:8,
      borderRadius:12, }}>
       
        
        <TextInput style={style.text2}
          placeholder='first name' />

        <TextInput style={style.text2}
          placeholder='last name' />

        <TextInput style={style.text2}
          placeholder='Email' />

        <TextInput style={style.text2}
          placeholder='Password' />

        <TouchableOpacity style={{
          width: '50%',
          alignSelf: 'center',
          elevation: 8,
          borderRadius: 70,
          padding: 12,
          backgroundColor: 'red',
          margin: 6
        }}
          onPress={() => navigation.navigate(' Login')}>

          <Text style={{ textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
      
        <Text style={{
        textAlign: 'center',
        fontWeight: 'bold',
        
      }}>
        OR continue with</Text>
       

        <View style={{ height:40,
       flexDirection: 'row',
        margin: 6,alignItems:'center'}}>
        <Image source={require('../assests/faceebok.png')}
          style={{
            width: '10%',
            height: '90%',
            borderRadius: 20,
            marginLeft: '20%',
            
          }} />

        <Image source={require('../assests/twtr.png')}
          style={{
            width: '10%',
            height: '90%',
            borderRadius: 20,
            marginLeft: '15%'
          }} />

        <Image source={require('../assests/google.png')}
          style={{
            width: '10%',
            height: '90%',
            borderRadius: 20,
            marginLeft: '15%'
          }} />

      </View>

      </View>
      </ScrollView>
     
    

   

      {/* <View style={{ height:'5%',
       flexDirection: 'row',
        margin: 6,backgroundColor:'red'}}>
        <Image source={require('../assests/faceebok.png')}
          style={{
            width: '10%',
            height: '25%',
            borderRadius: 20,
            marginLeft: '20%'
          }} />

        <Image source={require('../assests/twtr.png')}
          style={{
            width: '10%',
            height: '25%',
            borderRadius: 20,
            marginLeft: '15%'
          }} />

        <Image source={require('../assests/google.png')}
          style={{
            width: '10%',
            height: '25%',
            borderRadius: 20,
            marginLeft: '15%'
          }} />

      </View> */}
    
    </KeyboardAvoidingView>
   


  )
}
const style = StyleSheet.create({
  text2: {
    width: '80%',
    alignSelf: 'center',
    elevation: 25,
    borderRadius: 70,
    textAlign: 'center',
    margin: 4,
    backgroundColor: 'white'



  }

})
export default Signup;
