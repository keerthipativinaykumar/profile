import { View, Text, Animated, TextInput, Pressable, Linking } from 'react-native'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { StackActions, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { Dimensions, FlatList } from 'react-native-web';
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

const Footer = () => {

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

    const date = new Date();

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [fontsLoaded] = useFonts({
        'PoppinsBlack': require('../assets/fonts/PoppinsBlack.ttf'),
        'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
        'PoppinsExtraBold': require('../assets/fonts/PoppinsExtraBold.ttf'),
        'PoppinsMedium': require('../assets/fonts/PoppinsMedium.ttf'),
        'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
        'PoppinsSemiBold': require('../assets/fonts/PoppinsSemiBold.ttf'),
        'PoppinsLight': require('../assets/fonts/PoppinsLight.ttf'),
    });

    return (
        // {/* header */}
        <View style={{
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
            elevation: 5,
            backgroundColor: '#f2f2f2',
            marginHorizontal: 20,
            marginVertical: 20,
            paddingVertical: WIDTH > maxScreenWidth ? 20 : 5,
            paddingHorizontal: 20,
        }}>
            <View style={{
                flexDirection: WIDTH > maxScreenWidth ? 'row' : 'column',
                justifyContent: WIDTH > maxScreenWidth ? 'space-between' : 'center',
                alignContent: WIDTH > maxScreenWidth ? 'space-between' : 'center',
            }}>
                {
                    WIDTH > maxScreenWidth ?
                        <View style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}>
                            <View style={{
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                                    <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Vinay kumar keerthipati`}</Text>
                                </View>
                            </View>
                        </View>
                        :
                        null
                }
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}>
                    <View style={{
                        marginHorizontal: 20,
                        marginVertical: WIDTH > maxScreenWidth ? 20 : 10,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                            {/* <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`About Me`}</Text>
                            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`My Projects`}</Text>
                            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Contact Me`}</Text> */}
                            {/* <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <AntDesign name="github" size={32} color="black" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Github`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`@keerthipativinaykumar`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <AntDesign name="linkedin-square" size={32} color="#0966c2" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Linkedin`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`@keerthipativinaykumar`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <MaterialCommunityIcons name="gmail" size={32} color="black" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Gmail`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`keerthipativinaykumar@gmail.com`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                </View>
                            </View> */}

                            <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                {/* github */}
                                <Pressable
                                    onPress={() => { Linking?.openURL('https://github.com/keerthipativinaykumar') }}
                                    style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <AntDesign name="github" size={32} color="black" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Github`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`@keerthipativinaykumar`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </Pressable>
                                {/* linkedIN */}
                                <Pressable
                                    onPress={() => { Linking?.openURL('https://www.linkedin.com/in/keerthipativinaykumar/') }}
                                    style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <AntDesign name="linkedin-square" size={32} color="#0966c2" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Linkedin`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`@keerthipativinaykumar`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </Pressable>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                </View>
                                {/* twitter */}
                                <Pressable
                                    onPress={() => { Linking?.openURL('mailto:keerthipativinaykumar+vinaykumarkeerthipatiwebsite@gmail.com') }}
                                    style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                    <MaterialCommunityIcons name="gmail" size={32} color="black" style={{ marginHorizontal: 5, alignSelf: 'center', }} />
                                    {
                                        WIDTH > maxScreenWidth ?
                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', }}>{`Gmail`}</Text>
                                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'black', }}>{`keerthipativinaykumar@gmail.com`}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                </Pressable>
                                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}>
                    <View style={{
                        marginHorizontal: 20,
                        marginVertical: WIDTH > maxScreenWidth ? 20 : 10,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', }}>
                            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: 'grey', marginHorizontal: 10, }}>{`Privacy Policy @ ${date?.getFullYear()}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Footer