import { withNavigation } from 'react-navigation';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

import Swiper from 'react-native-swiper'



const Bmw = ({navigation}) =>{ 
   
    return (

      <Swiper style={style.wrapper} autoplay={false}>

        <View style={style.slide1}>


          <Image source={require('../assests/bmw1.jpeg')}
          resizeMode='contain'
            style={{ width: '100%', height: '50%', borderRadius: 1 }} />
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
              onPress={() =>navigation.navigate('Registeration')}
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
                <View style={{ width: '50%', flexDirection: 'row',marginLeft: '10%', }}>
                  <Image source={require('../assests/bhp.jpg')}
                    style={{ width: 30, height: 30, }} />
                  <Text style={{
                    fontWeight: 'bold',
                    marginLeft: 4,
                    fontSize: 15
                  }}>
                    83.80 bhp</Text>
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
                <View style={{ flexDirection: "row", marginLeft: '21%', marginTop: 25 }}>
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
                <View style={{ flexDirection: "row", marginLeft: '23%', marginTop: 25 }}>
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
              fontSize: 20,
            
            }}>details</Text>

            <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12 }}>The BMW 7 Series has 1 Petrol Engine on offer. The Petrol engine is 2998 cc .
              It is available with Automatic transmission.Depending upon the variant
              and fuel type the 7 Series has a mileage of{'\n'} . The 7 Series is a 5
              seater 6 cylinder car and has {'\n'}length of 5391mm, width of 2192mm and a
              wheelbase of 3215mm</Text>
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






        <View style={style.slide1}>
          <Image source={require('../assests/bmw2.jpeg')}
          resizeMode='contain'
            style={{ width: '100%', height: '50%', borderRadius: 2 }} />
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
                marginLeft: '19%'

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
                    style={{ width: 30, height: 30, marginLeft:'20%' }} />
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

            <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>The BMW 7 Series has 1 Petrol Engine on offer. The Petrol engine is 2998 cc .
              It is available with Automatic transmission.Depending upon the variant
              and fuel type the 7 Series has a mileage of . The 7 Series is a 5
              seater 6 cylinder car and has length of 5391mm, width of 2192mm and a
              wheelbase of 3215mm</Text>
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






        <View style={style.slide2}>
          <Image source={require('../assests/bmw3.jpeg')}
          resizeMode='contain'
            style={{ width: '100%', height: '50%', borderRadius: 1 }} />

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
                  Rs.$3.77 L</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                elevation: 2,
                fontSize: 15,
                margin: 10,
                marginLeft: '19%'

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
                    900 CC</Text>
                </View>
                <View style={{ width: '50%', flexDirection: 'row', }}>
                  <Image source={require('../assests/bhp.jpg')}
                    style={{ width: 30, height: 30, marginLeft:'20%' }} />
                  <Text style={{
                    fontWeight: 'bold',
                    marginLeft: 4,
                    fontSize: 15
                  }}>
                    73.60 bhp</Text>
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
                    2020</Text>
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
                <View style={{ flexDirection: "row", marginLeft: '22%', marginTop: 25 }}>
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

            <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>The BMW 7 Series has 1 Petrol Engine on offer. The Petrol engine is 2998 cc .
              It is available with Automatic transmission.Depending upon the variant
              and fuel type the 7 Series has a mileage of . The 7 Series is a 5
              seater 6 cylinder car and has length of 5391mm, width of 2192mm and a
              wheelbase of 3215mm</Text>
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






        <View style={style.slide3}>
          <Image source={require('../assests/bmw4.jpeg')}
          resizeMode='contain'
            style={{
              width: '100%',
              height: '50%',
              borderRadius: 1
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
                  Rs.$9.77 L</Text>
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
                    1500 CC</Text>
                </View>
                <View style={{ width: '50%', flexDirection: 'row', }}>
                  <Image source={require('../assests/bhp.jpg')}
                    style={{ width: 30, height: 30, marginLeft: '20%' }} />
                  <Text style={{
                    fontWeight: 'bold',
                    marginLeft: 4,
                    fontSize: 15
                  }}>
                    95.80 bhp</Text>
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
                    26.23 kmpl</Text>
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
                <View style={{ flexDirection: "row", marginLeft: '21%', marginTop: 25 }}>
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

            <Text style={{ fontWeight: 'bold',marginLeft:12,marginRight:12  }}>The BMW 7 Series has 1 Petrol Engine on offer. The Petrol engine is 2998 cc .
              It is available with Automatic transmission.Depending upon the variant
              and fuel type the 7 Series has a mileage of . The 7 Series is a 5
              seater 6 cylinder car and has length of 5391mm, width of 2192mm and a
              wheelbase of 3215mm</Text>
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
  }



const style = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,

  },
  slide2: {
    flex: 1,

  },
  slide3: {
    flex: 1,

   
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
    container2: {
      width: '90%',
      alignSelf: 'center',
      height: '50%',
      borderRadius: 30,
      backgroundColor: 'white',
      elevation:10
    }
  



})

export default Bmw