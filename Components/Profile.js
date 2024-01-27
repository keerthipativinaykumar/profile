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

const Profile = () => {

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

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
            paddingVertical: 20,
            paddingHorizontal: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: WIDTH > maxScreenWidth ? 'row' : 'column',
                }}>

                    {/* vinay image */}
                    <View
                        style={WIDTH > maxScreenWidth ? [{
                            borderWidth: 1,
                            borderRadius: 100,
                            borderColor: 'lightgrey',
                            width: 170,
                            height: 170,
                            marginHorizontal: 20,
                            marginVertical: 20,
                        }] : [{
                            borderWidth: 1,
                            borderRadius: 100,
                            borderColor: 'lightgrey',
                            width: 170,
                            height: 170,
                            marginHorizontal: 20,
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignSelf: 'center',
                        }]}
                    >
                        <Image
                            style={{
                                flex: 1,
                                borderRadius: 100,
                                // alignSelf:'center',
                            }}
                            source={require('../assets/images/VinayBG.png')}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                    </View>
                    {/* vinay name */}
                    <View style={{}}>
                        <View style={{
                            // marginVertical: 20,
                            // marginHorizontal: 20,
                        }}>
                            <Text numberOfLines={1} style={{
                                color: 'rgba(51, 51, 51, 1)', fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 40 : 16, marginVertical: 10,
                                marginHorizontal: 20, alignSelf: WIDTH > maxScreenWidth ? 'auto' : 'center',
                            }}>{`VINAY KUMAR KEERTHIPATI`}</Text>
                        </View>
                        <View style={{
                            marginHorizontal: 20,
                        }}>
                            <Text numberOfLines={1} style={{
                                color: 'rgba(51, 51, 51, 1)', fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 40 : 14, marginVertical: 10,
                                marginHorizontal: 20, alignSelf: WIDTH > maxScreenWidth ? 'auto' : 'center',
                            }}>{`Mobile App Developer`}</Text>
                        </View>
                        <View style={{
                            marginHorizontal: 20,
                            marginVertical: 20,
                            alignSelf:'center',
                        }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                                {/* github */}
                                <Pressable
                                onPress={()=>{Linking?.openURL('https://github.com/keerthipativinaykumar')}}
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
                                onPress={()=>{Linking?.openURL('https://www.linkedin.com/in/keerthipativinaykumar/')}}
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
                                onPress={()=>{Linking?.openURL('mailto:keerthipativinaykumar+vinaykumarkeerthipatiwebsite@gmail.com')}}
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

                {/* <View style={{
                    marginVertical: WIDTH > maxScreenWidth ? 20 : 0,
                    marginHorizontal: WIDTH > maxScreenWidth ? 20 : 0,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    // alignSelf:'flex-end',
                }}>
                    <Feather name="share" size={28} color="grey" />
                </View> */}
            </View>

            <View style={{

            }}>

            </View>

        </View>
    )
}

export default Profile