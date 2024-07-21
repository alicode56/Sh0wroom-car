import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { Component } from 'react';

const Audi = ({ navigation }) => {
    {
        return (
            <Swiper style={style.wrapper} showsPagination={true} autoplay={false} >
                <View style={style.Slide1}>
                    <Image source={require('../assests/a1.jpeg')}
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
                                        style={{ width: 30, height: 30, marginLeft: '20%'}} />
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
                                        style={{ width: 30, height: 30, }} />
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

                        <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Audi Lineup - Latest Models & Discontinued Models
                            Audi's car lineup includes the A3 subcompact sedan,
                            A4 compact sedan and Allroad wagon, A5 hatchback,
                            A6 mid-size sedan and Allroad wagon, A7 hatchback
                            and A8 full-size sedan. SUVs include the small Q3,
                            compact Q5, three-row Q7 and flagship
                            Q8 with five seats and a sleeker roofline.</Text>
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
                    <Image source={require('../assests/a2.jpeg')}
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
                                        style={{ width: 30, height: 30, marginLeft: '20%'}} />
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

                        <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Audi Lineup - Latest Models & Discontinued Models
                            Audi's car lineup includes the A3 subcompact sedan,
                            A4 compact sedan and Allroad wagon, A5 hatchback,
                            A6 mid-size sedan and Allroad wagon, A7 hatchback
                            and A8 full-size sedan. SUVs include the small Q3,
                            compact Q5, three-row Q7 and flagship
                            Q8 with five seats and a sleeker roofline.</Text>
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
                    <Image source={require('../assests/a3.jpg')}
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

                        <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Audi Lineup - Latest Models & Discontinued Models
                            Audi's car lineup includes the A3 subcompact sedan,
                            A4 compact sedan and Allroad wagon, A5 hatchback,
                            A6 mid-size sedan and Allroad wagon, A7 hatchback
                            and A8 full-size sedan. SUVs include the small Q3,
                            compact Q5, three-row Q7 and flagship
                            Q8 with five seats and a sleeker roofline.</Text>
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
                    <Image source={require('../assests/a4.jpeg')}
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
                                        style={{ width: 30, height: 30, marginLeft: '20%'}} />
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

                        <Text style={{ fontWeight: 'bold', marginLeft: 12, marginRight: 12 }}>Audi Lineup - Latest Models & Discontinued Models
                            Audi's car lineup includes the A3 subcompact sedan,
                            A4 compact sedan and Allroad wagon, A5 hatchback,
                            A6 mid-size sedan and Allroad wagon, A7 hatchback
                            and A8 full-size sedan. SUVs include the small Q3,
                            compact Q5, three-row Q7 and flagship
                            Q8 with five seats and a sleeker roofline.</Text>
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
};


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

export default Audi;




