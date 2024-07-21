import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Peofile = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('../assests/logocomnpy.png')}
          style={{
            width: '36%',
            height: '37%',
            borderRadius: 300,
            marginLeft: '32%',
            marginTop: '10%'
          }} />
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center'
        }}>
          🅲🅰🆁🅳🅴🅰🅻🅴🆁
        </Text>

        <TouchableOpacity style={{
          elevation: 1,
          backgroundColor: 'yellow',
          borderRadius: 30,
          width: '50%',
          alignSelf: 'center',
          marginTop: 6
        }}>
          <Text style={style.text4}>
            Upgrade to Pro</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
      }}
        onPress={() => navigation.navigate('Seeting')}>
        <Text style={style.text4}>
          Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6
      }}>
        <Text style={style.text4}>
          Prrchase history</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6
      }}
        onPress={() => navigation.navigate('Seeting')}>
        <Text style={style.text4}>
          Help and support</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6
      }}
        onPress={() => navigation.navigate('Seeting')}>
        <Text style={style.text4}>
          Seeting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6
      }}>
        <Text style={style.text4}>
          Invite frinds</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        elevation: 1,
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginTop: 6
      }}>
        <Text style={style.text4}>
          Logout</Text>
      </TouchableOpacity>


    </View>
  )
}
style = StyleSheet.create({
  text4: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic',
    fontSize: 16,



  }
})

export default Peofile