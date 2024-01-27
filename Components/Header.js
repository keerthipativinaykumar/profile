import { View, Text, Animated, TextInput, Linking, } from 'react-native'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { StackActions, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { Dimensions, FlatList,Pressable } from 'react-native-web';
import AboutMe from './AboutMe';
import Mydevexperience from './Mydevexperience';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const NO_WIDTH_SPACE = '​';

const highlight = string =>
    string.split(' ').map((word, i) => (
        <Text key={i}>
            <Text style={{ fontFamily: 'PoppinsBold', color: 'black', }}>{word}</Text>
            {NO_WIDTH_SPACE}
        </Text>
    ));

//   const aboutMeContent = 
const testMe = `I am a quick learner and have a passion for technology and innovation. I am looking for a position where I can utilize my skills and experience to help a company grow and succeed.`;

const projectDATA = [
    {
        id: 1,
        companyTitle: 'Margadarsi Computers - Eenadu',
        project: 'Eenadu News - Official App',
        image: require('../assets/images/eenaduappshot.png'),
        descDATA: ['hello', 'world', 'this', 'is', 'vinay', 'kumar', 'keerthipati'],
    }
]

const Header = () => {

    // const width = '100%';

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [ showMenu, setShowMenu ] = useState(false);

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;
    // console.log('WIDTH', WIDTH);

    const [fontsLoaded] = useFonts({
        'PoppinsBlack': require('../assets/fonts/PoppinsBlack.ttf'),
        'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
        'PoppinsExtraBold': require('../assets/fonts/PoppinsExtraBold.ttf'),
        'PoppinsMedium': require('../assets/fonts/PoppinsMedium.ttf'),
        'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
        'PoppinsSemiBold': require('../assets/fonts/PoppinsSemiBold.ttf'),
        'PoppinsLight': require('../assets/fonts/PoppinsLight.ttf'),
    });

    const OnMenuPress = () => {
        setShowMenu(!showMenu);
    }

    return (
        // {/* header */}
        <>
            <View style={{
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'lightgrey',
                elevation: 5,
                backgroundColor: '#f2f2f2',
                marginHorizontal: 20,
                // marginVertical: 20,
                marginTop: 20,
                marginBottom: WIDTH > maxScreenWidth ? 20 : 3,
                paddingVertical: 20,
                paddingHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'space-between',
                }}>
                    {/* site name */}
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            marginHorizontal: WIDTH > maxScreenWidth ? 20 : 5,
                            marginVertical: WIDTH > maxScreenWidth ? 20 : 0,
                            alignSelf: 'center',
                        }}>
                            <Pressable
                                onPress={() => {
                                    navigation.dispatch(StackActions.replace('Home'));
                                }}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', alignSelf: 'center', }}>
                                <Text style={{ alignSelf: 'center', fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 24 : 18, color: 'black', marginHorizontal: WIDTH > maxScreenWidth ? 10 : 0, }}>{`Vinay kumar keerthipati`}</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* menus */}

                    {WIDTH > maxScreenWidth && <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            marginHorizontal: 20,
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                                <Pressable onPress={() => {
                                    navigation.navigate('AboutmeScreen');
                                }}>
                                    <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`About Me`}</Text>
                                </Pressable>
                                <Pressable onPress={() => {
                                    navigation.navigate('MyprojectsScreen');
                                }}>
                                    <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`My Projects`}</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>}
                    {/* connect section */}
                    {WIDTH > maxScreenWidth && <View style={{
                        flexDirection: 'row',
                    }}>
                        {/* <Pressable
                            onPress={() => {

                            }}
                            style={{
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', borderWidth: 1, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, borderColor: 'lightgrey', }}>
                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Download Resume`}</Text>
                            </View>
                        </Pressable> */}
                        <Pressable
                            onPress={() => {
Linking?.openURL('tel:+919848041020')
                            }}
                            style={{
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', borderWidth: 1, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, borderColor: 'lightgrey', }}>
                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Connect with Me`}</Text>
                            </View>
                        </Pressable>
                    </View>}

                    {
                        WIDTH > maxScreenWidth ? null : <Pressable
                            onPress={OnMenuPress}
                            style={{
                                flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, paddingHorizontal: 5, paddingVertical: 5, alignSelf: 'center', justifyContent: 'center', alignContent: 'center',
                            }}>
                            <Entypo name="menu" size={28} color="grey" style={{ alignSelf: 'center' }} />
                        </Pressable>
                    }
                </View>
            </View>

            {
                (WIDTH > maxScreenWidth) ?
                    null
                    :
                    showMenu  && <View style={{
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'lightgrey',
                        elevation: 5,
                        backgroundColor: '#f2f2f2',
                        marginHorizontal: 20,
                        marginVertical: 0,
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                marginVertical: 20,
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', }}>
                                    <Pressable onPress={() => {
                                        navigation.navigate('AboutmeScreen');
                                    }}>
                                        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`About Me`}</Text>
                                    </Pressable>
                                    <View style={{ height: 1, borderRadius: 100, width: WIDTH * 0.7, backgroundColor: 'lightgrey', marginVertical: 10, marginHorizontal: 10, }} />
                                    <Pressable onPress={() => {
                                        navigation.navigate('MyprojectsScreen');
                                    }}>
                                        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`My Projects`}</Text>
                                    </Pressable>
                                    <View style={{ height: 1, borderRadius: 100, width: WIDTH * 0.7, backgroundColor: 'transparent', marginVertical: 10, marginHorizontal: 10, }} />
                                    {/* <Pressable
                                        onPress={() => {

                                        }}
                                        style={{
                                            // marginHorizontal: 20,
                                            marginVertical: 10,
                                        }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', borderWidth: 1, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, borderColor: 'lightgrey', }}>
                                            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Download Resume`}</Text>
                                        </View>
                                    </Pressable> */}
                                    {/* <View style={{ height: 1, borderRadius: 100, width: WIDTH * 0.7, backgroundColor: 'lightgrey', marginVertical: 10, marginHorizontal: 10, }} /> */}
                                    <Pressable
                                        onPress={() => {

                                        }}
                                        style={{
                                            // marginHorizontal: 20,
                                            marginVertical: 10,
                                        }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', borderWidth: 1, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, borderColor: 'lightgrey', }}>
                                            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Connect with Me`}</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
            }
        </>
    )
}

export default Header