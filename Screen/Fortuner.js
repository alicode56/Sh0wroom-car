import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'


const Fortuner = ({ navigation }) => {
  return (
    <Swiper style={style.Wrapper} autoplay={false}>
      <View style={style.Slide1}>
        <Image source={require('../assests/f1.jpg')}
        resizeMode='contain'
          style={{
            width: '100%'
            , height: '50%',
            borderRadius: 2
          }} />

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '8%'

            }}>

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Rs.$6.67 L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '20%'

            }}
              onPress={() => navigation.navigate('Registeration')}
            >

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Apply for Registeration</Text>
            </TouchableOpacity>

          </View>

          <View style={style.container2}>


            <Text style={{
              fontSize: 15,
              color: 'black',
              marginLeft: '40%',
              fontWeight: 'bold'
            }}>
              Overview</Text>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Image source={require('../assests/cc.jpeg')}
                  style={{ width: 25, height: 25, marginLeft: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15,

                }}>
                  1200 CC</Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row', }}>
                <Image source={require('../assests/bhp.jpg')}
                  style={{ width: 30, height: 30, marginLeft: '20%' }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  93.80 bhp</Text>
              </View>


            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/speed.jpg')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  20.23 kmpl</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/clyndr.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  2023</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/transmission.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  Automatic</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/key.jpeg')}
                  style={{ width: 20, height: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  First Owner</Text>
              </View>
            </View>

          </View>


          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}>details</Text>

          <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>The Toyota Fortuner has 1 Diesel Engine and 1
            Petrol Engine on offer. The Diesel engine is 2755 cc
            while the Petrol engine is 2694 cc .
            It is available with Automatic & Manual transmission.
            Depending upon the variant and fuel type the Fortuner has
            a mileage of 10.0 kmpl . The Fortuner is a 7 seater 4 cylinder
            car and has length of 4795mm, width of 1855mm and a wheelbase
            of 2745mm</Text>
          <TouchableOpacity style={{ elevation: 2, margin: 20 }}>


            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              process to paymnet</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>





      <View style={style.Slide1}>
        <Image source={require('../assests/f2.png')}
        resizeMode='contain'
          style={{
            width: '100%',
            height: '50%',
            borderRadius: 20
          }} />

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '8%'

            }}>

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Rs.$5.77 L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '20%'

            }}
              onPress={() => navigation.navigate('Registeration')}
            >

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Apply for Registeration</Text>
            </TouchableOpacity>

          </View>

          <View style={style.container2}>


            <Text style={{
              fontSize: 15,
              color: 'black',
              marginLeft: '40%',
              fontWeight: 'bold'
            }}>
              Overview</Text>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Image source={require('../assests/cc.jpeg')}
                  style={{ width: 25, height: 25, marginLeft: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15,

                }}>
                  1000 CC</Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row', }}>
                <Image source={require('../assests/bhp.jpg')}
                  style={{ width: 30, height: 30, marginLeft: '20%' }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  78.80 bhp</Text>
              </View>


            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/speed.jpg')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  22.23 kmpl</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/clyndr.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  2022</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/transmission.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  Automatic</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/key.jpeg')}
                  style={{ width: 20, height: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  First Owner</Text>
              </View>
            </View>

          </View>


          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}>details</Text>

          <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>Toyota Fortuner 4X4 Diesel Prices: The price of the                     Toyota Fortuner 4X4 Diesel in Rahuri is Rs 39.33 Lakh
            (Ex-showroom). To know more about the Fortuner 4X4 Diesel
            Images, Reviews, Offers & other details, download the
            CarDekho App.
            Toyota Fortuner 4X4 Diesel mileage : It returns a certified
            mileage of 8.0 kmpl.</Text>
          <TouchableOpacity style={{ elevation: 2, margin: 20 }}>


            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              process to paymnet</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>




      <View style={style.Slide1}>
        <Image source={require('../assests/f3.jpeg')}
        resizeMode='contain'
          style={{
            width: '100%',
            height: '50%',
            borderRadius: 20
          }} />

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '8%'

            }}>

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Rs.$7.77 L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '20%'

            }}
              onPress={() => navigation.navigate('Registeration')}
            >

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Apply for Registeration</Text>
            </TouchableOpacity>

          </View>

          <View style={style.container2}>


            <Text style={{
              fontSize: 15,
              color: 'black',
              marginLeft: '40%',
              fontWeight: 'bold'
            }}>
              Overview</Text>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Image source={require('../assests/cc.jpeg')}
                  style={{ width: 25, height: 25, marginLeft: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15,

                }}>
                  1300 CC</Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row', }}>
                <Image source={require('../assests/bhp.jpg')}
                  style={{ width: 30, height: 30, marginLeft: '20%' }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  91.80 bhp</Text>
              </View>


            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/speed.jpg')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  25.23 kmpl</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/clyndr.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  2022</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/transmission.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  Automatic</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/key.jpeg')}
                  style={{ width: 20, height: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  First Owner</Text>
              </View>
            </View>

          </View>


          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}>details</Text>

          <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12 }}>Toyota Fortuner 4X4 Diesel Prices: The price of the Toyota
            Fortuner 4X4 Diesel in Rahuri is Rs 39.33 Lakh (Ex-showroom).
            To know more about the Fortuner 4X4 Diesel Images, Reviews,
            Offers & other details, download the CarDekho App.
            Toyota Fortuner 4X4 Diesel mileage :
            It returns a certified mileage of 8.0 kmpl</Text>
          <TouchableOpacity style={{ elevation: 2, margin: 20 }}>


            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              process to paymnet</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>





      <View style={style.Slide1}>
        <Image source={require('../assests/f4.jpg')}
        resizeMode='contain'
          style={{
            width: '100%',
            height: '50%',
            borderRadius: 20
          }} />

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '8%'

            }}>

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Rs.$10.77 L</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              elevation: 2,
              fontSize: 15,
              margin: 10,
              marginLeft: '20%'

            }}
              onPress={() => navigation.navigate('Registeration')}
            >

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
                Apply for Registeration</Text>
            </TouchableOpacity>

          </View>

          <View style={style.container2}>


            <Text style={{
              fontSize: 15,
              color: 'black',
              marginLeft: '40%',
              fontWeight: 'bold'
            }}>
              Overview</Text>
            <View style={{ flexDirection: 'row' }}>

              <View style={{ width: '50%', flexDirection: 'row' }}>
                <Image source={require('../assests/cc.jpeg')}
                  style={{ width: 25, height: 25, marginLeft: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15,

                }}>
                  1600 CC</Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row', }}>
                <Image source={require('../assests/bhp.jpg')}
                  style={{ width: 30, height: 30, marginLeft: '20%' }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  99.80 bhp</Text>
              </View>


            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/speed.jpg')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  29.23 kmpl</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/clyndr.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  2024</Text>
              </View>
            </View>


            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 25 }}>
                <Image source={require('../assests/transmission.png')}
                  style={{ width: 30, height: 30 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  Automatic</Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: '20%', marginTop: 25 }}>
                <Image source={require('../assests/key.jpeg')}
                  style={{ width: 20, height: 20 }} />
                <Text style={{
                  fontWeight: 'bold',
                  marginLeft: 4,
                  fontSize: 15
                }}>
                  First Owner</Text>
              </View>
            </View>

          </View>


          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}>details</Text>

          <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>Toyota Fortuner is available in White Pearl Crystal
            Shine. Toyota Fortuner is also available in 7 colours,
            namely, Sparkling Black Cystal Shine, Phantom Brown,
            Super White, Attitude Black, Avant-Garde Bronze,
            Grey Metallic, Silver Metallic.</Text>
          <TouchableOpacity style={{ elevation: 2, margin: 20 }}>


            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              process to paymnet</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </Swiper>
  )
};


const style = StyleSheet.create({
  Wrapper: {},
  Slide1: {
    flex: 1,



  },
  Slide2: {
    flex: 1

  },
  Slide3: {
    flex: 1

  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },

  container2: {
    width: '90%',
    alignSelf: 'center',
    height: '50%',
    borderRadius: 30,
    backgroundColor: 'white',
    
  }


});



export default Fortuner















