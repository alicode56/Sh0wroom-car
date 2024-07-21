import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Image
        source={require('../assests/logocomnpy.png')}
        style={{
          width: '34%',
          height: '21%',
          borderRadius: 300,
          marginLeft: '34%',
          marginTop: '10%',
        }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
        }}>
        🅲🅰🆁🅳🅴🅰🅻🅴🆁
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 20,
          color: 'black',
        }}>
        ｗｅｌｃｏｍｅ{' '}
      </Text>

      <ScrollView>
        {/* <View style={{
        flexDirection: 'row',
        marginTop: 10,
       elevation:2,
       alignItems: 'center',
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        
    }}>
      <TextInput style={styles.text1}
      placeholder='user'/>
      <Image source={require('../assests/home.png')}
       style={{
        width: 20,
        height: 20,
        tintColor: 'blue'
      }} />

    </View> */}

        <View style={{marginTop: '30%'}}>
          <View style={styles.btn}>
            <TextInput style={styles.text1} placeholder="user name" />
            <Image
              source={require('../assests/user.png')}
              style={{
                width: '7%',
                height: '40%',
                marginLeft: 15,
                tintColor: 'black',
              }}
            />
          </View>

          <View style={styles.btn}>
            <TextInput style={styles.text1} placeholder="Password" />
            <Image
              source={require('../assests/pswrd.png')}
              style={{
                width: '9%',
                height: '42%',
                marginLeft: 15,
                tintColor: 'black',
              }}
            />
          </View>

          {/* <TextInput
          style={styles.text1}
          placeholder='User name' 
          /> */}
          {/* 
        <TextInput
          style={styles.text1}
          placeholder='Passworod' /> */}

          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,
                textAlign: 'right',
                marginRight: 35,
              }}
              onPress={() => navigation.navigate('Forgot')}>
              Forgot password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '60%',
              alignSelf: 'center',
              elevation: 20,
              borderRadius: 70,
              padding: 12,
              backgroundColor: 'red',
              margin: 6,
            }}
            onPress={() => navigation.navigate('Main')}>
            <Text style={{textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>

          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 12}}>
            <Text style={{color: 'red'}}>Dont have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                }}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 
       <View style={{ flexDirection: 'row',
       alignSelf: 'center',backgroundColor:'yellow',
        margin: 6,
         }}>
        <Text style={{ color: "red" }}>Dont have account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 15, color: 'black'
          }}>Create</Text>
        </TouchableOpacity>
      </View>  */}
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    width: '70%',
    alignSelf: 'center',
    // elevation: 20,
    borderRadius: 70,
    textAlign: 'left',
    marginLeft: 15,
    margin: 6,
    // backgroundColor: 'white'
  },
  btn: {
    flexDirection: 'row',
    marginTop: 10,
    elevation: 2,
    alignItems: 'center',
    width: '70%',
    // paddingLeft: 20,
    // paddingRight: 20,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: '21%',
  },
});

export default Login;
