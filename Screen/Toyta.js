import React, { Component } from 'react'
import { View, Text, StyleSheet, image, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

// export default class SwiperComponent extends Component {
//     render() {


const Toyota = ({ navigation }) => {

    return (
        <Swiper style={style.wrapper} showsPagination={true} autoplay={false} >
            <View style={style.Slide1}>
                <Image source={require('../assests/t1.jpeg')}
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
                                    style={{ width: 30, height: 30, }} />
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

                    <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Price: 12,409,000 PKR
                        Engine Type	DOHC 16 Valves
                        Engine Displacement	2755 cc
                        Fuel Supply System	Diesel
                        Max Horsepower/RPM	175 hp @ 3400 RPM
                        Transmission	Automatic
                        Gear Box	6 Speed
                        Ground Clearance	286 (mm)
                        Curb Weight	2030 KG
                        Fuel Capacity (Litres)	80 L
                        Boot Space.</Text>
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

            <View style={style.Slide2}>
                <Image source={require('../assests/t2.jpeg')}
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
                                Rs.$5.67 L</Text>
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
                                    style={{ width: 30, height: 30, marginLeft: '20%'}} />
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

                    <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Price: 12,409,000 PKR
                        Engine Type	DOHC 16 Valves
                        Engine Displacement	2755 cc
                        Fuel Supply System	Diesel
                        Max Horsepower/RPM	175 hp @ 3400 RPM
                        Transmission	Automatic
                        Gear Box	6 Speed
                        Ground Clearance	286 (mm)
                        Curb Weight	2030 KG
                        Fuel Capacity (Litres)	80 L
                        Boot Space.</Text>
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

            <View style={style.Slide3}>
                <Image source={require('../assests/t3.jpeg')}
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
                                    1100 CC</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', }}>
                                <Image source={require('../assests/bhp.jpg')}
                                    style={{ width: 30, height: 30, marginLeft: '20%' }} />
                                <Text style={{
                                    fontWeight: 'bold',
                                    marginLeft: 4,
                                    fontSize: 15
                                }}>
                                    13.80 bhp</Text>
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
                                    19.23 kmpl</Text>
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

                    <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Price: 12,409,000 PKR
                        Engine Type	DOHC 16 Valves
                        Engine Displacement	2755 cc
                        Fuel Supply System	Diesel
                        Max Horsepower/RPM	175 hp @ 3400 RPM
                        Transmission	Automatic
                        Gear Box	6 Speed
                        Ground Clearance	286 (mm)
                        Curb Weight	2030 KG
                        Fuel Capacity (Litres)	80 L
                        Boot Space.</Text>
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

            <View style={style.Slide4}>
                <Image source={require('../assests/t4.jpeg')}
                resizeMode='contain'
                    style={{
                        width: '100%'
                        , height: '50%',
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
                                Rs.$4.67 L</Text>
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

                    <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Price: 12,409,000 PKR
                        Engine Type	DOHC 16 Valves
                        Engine Displacement	2755 cc
                        Fuel Supply System	Diesel
                        Max Horsepower/RPM	175 hp @ 3400 RPM
                        Transmission	Automatic
                        Gear Box	6 Speed
                        Ground Clearance	286 (mm)
                        Curb Weight	2030 KG
                        Fuel Capacity (Litres)	80 L
                        Boot Space.</Text>
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
    Slide1: {
        flex: 1
    },

    Slide2: {
        flex: 1
    },

    Slide3: {
        flex: 1
    },

    Slide4: {
        flex: 1
    },
    container2: {
        width: '90%',
        alignSelf: 'center',
        height: '50%',
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 20
    }


});
export default Toyota;











