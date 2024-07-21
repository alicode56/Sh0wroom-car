import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"

const Main = ({ navigation }) => {
 const [press ,setpress]=useState(0)


  return (
    <View>
      <Text style={{ fontWeight: 'bold',
       fontSize: 17,
       color:'black',margin:1,
       marginTop:6,
       marginLeft:12 }}>Available models</Text>
      <View style={{ flexDirection: 'row',
       justifyContent:'space-around',
       padding:3}}>

        <TouchableOpacity onPress={() => navigation.navigate('Bmw')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>BMW</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Fortuner')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Fortuner</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Toyta')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Toyta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Corola')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Corola</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(' Audi')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Audi</Text>
        </TouchableOpacity>

      </View>
      <Text style={{ fontWeight: 'bold',
       fontSize: 20,
       color:'black',marginLeft:12,marginTop:3 }}>services</Text>
      <View style={style.container}>
        <Text style={{ fontWeight: 'bold',
         textAlign: 'center',
          margin: 10,
           color: 'black' }}> Body works</Text>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/bdy.jpeg')} style={{ width: '25%',
           height: '100%',marginLeft:5 }} />

          <Text style={{marginLeft:10,fontWeight:'bold'}}>During Operation the body {'\n'}is subjectd 
            to constatnt load, and {'\n'}working it constanatly,Bodywork {'\n'}consists of all of the steps
            {'\n'} required  to repair damaged 
          </Text>

        </View>
      </View>



      <View style={style.container}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', margin: 10, color: 'black' }}>Maintenance schedule</Text>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/mntnce.jpeg')} style={{ width: '25%', height: '100%',marginLeft:7 }} />

          <Text style={{marginLeft:10,fontWeight:'bold'}}>Timely inspection of equipyment
          {'\n'} and prevent  breakdowns.
            It’s just{'\n'} as important to keep the   backup {'\n'}tire inflated as it is the four tires{'\n'} under
             your car.
          </Text>

        </View>
      </View>


      <View style={style.container}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', margin: 10, color: 'black' }}>Maintenance schedule</Text>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/spareprts.jpeg')} style={{marginLeft:7, width: '25%', height: '100%' }} />

          <Text style={{marginLeft:10,fontWeight:'bold'}}>Timely inspection of equipyment {'\n'}
            and  prevent breakdowns.
            It’s just{'\n'} as  importantto keep the   backup {'\n'}tire  inflated as it is the four tires{'\n'} under
             your car.
            
          </Text>

        </View>
      </View>

            
            <View style={{flexDirection:'row',
            marginTop:30,
            backgroundColor:'white',
            height:'7%',
            elevation:20
            }}>
             
            <TouchableOpacity style={{marginLeft:'14%'}}
            onPress={()=>navigation.navigate('Registeration')}>
            <Image source={require('../assests/car.png')} 
          style={style.img}/> 

            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:'12%'}}  onPress={()=>{setpress(!press)}} >
            <Image source={require('../assests/sss.png')}
             style={style.img}
            // style={[style.img, {tintColor: press===true ? 'blue':'black'}]}
       /> 

            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:'12%'}}
            onPress={()=>navigation.navigate('Seeting')}>
            <Image source={require('../assests/settings.png')} 
            style={style.img}/> 

            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:'12%'}}
            onPress={()=>navigation.navigate('Peofile')}>
            <Image source={require('../assests/user.png')} 
            style={style.img}/> 

            </TouchableOpacity>
            
            
            
            </View>
    </View>
    
    

  )
}
const style = StyleSheet.create({
  container: {
    width: "94%",
    height: '24%',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderRadius: 25,
   elevation:20,
   backgroundColor:'white'
  

  },
  img:{
    width:35, height:'63%',borderRadius:60,marginTop:8,tintColor:'black'
   


  }
})

export default Main