import { View, Text, Animated, TextInput, Pressable } from 'react-native'
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
import { ProjectDATA } from '../JsonData/ProjectData';

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

const Mydevexperience = ({name}) => {

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
        // {/* dev experiance section */}
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
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 40 : 24, color: 'black', }}>{`${name?name:'My Dev Experience'}`}</Text>
            <View style={{width:'100%',borderWidth:0,borderColor:'red',}}>
                {/* Eenadu Projects */}
                <FlatList
                    data={ProjectDATA}
                    renderItem={({ item }) => (
                        <View style={{
                            // flexDirection: 'row',
                            justifyContent: 'space-around', alignContent: 'space-around',
                            width:'100%',borderWidth:0,borderColor:'red',
                        }}>
                            <View style={{
                                // justifyContent: 'space-between',
                                borderWidth: 1,
                                borderRadius: WIDTH > maxScreenWidth ? 20 : 10,
                                borderColor: 'lightgrey',
                                elevation: 5,
                                backgroundColor: '#ffffff',
                                // marginHorizontal: 20,
                                marginRight: 10,
                                marginVertical: 20,
                                paddingVertical: 20,
                                paddingHorizontal: 20,
                                flexDirection: WIDTH > maxScreenWidth ? 'row' : 'column',
                                width: '100%',
                            }}>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderRadius: WIDTH > maxScreenWidth ? 8 : 4,
                                        borderColor: 'lightgrey',
                                        width: 85,
                                        height: 135,
                                        marginHorizontal: 20,
                                        // marginVertical: 20,
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        alignSelf: 'center',
                                    }}>
                                    <Image
                                        style={{
                                            flex: 1,
                                            borderRadius: WIDTH > maxScreenWidth ? 8 : 4,
                                        }}
                                        source={item.image}
                                        placeholder={blurhash}
                                        contentFit="fill"
                                        transition={1000}
                                    />
                                </View>

                                <View style={{
                                    // width: '81%',
                                    borderWidth: WIDTH > maxScreenWidth ? 1 : 0,
                                    borderRadius: 10,
                                    borderColor: 'lightgrey',
                                    paddingHorizontal: WIDTH > maxScreenWidth ? 20 : 0,
                                    paddingVertical: 10,
                                    justifyContent: 'space-between',
                                    alignContent: 'space-between',
                                    marginVertical: WIDTH > maxScreenWidth ? 0 : 10,
                                    width:'92%',borderWidth:0,borderColor:'red',
                                }}>
                                    <View style={{ marginVertical: WIDTH > maxScreenWidth ? 0 : 10, }}>
                                        <Text numberOfLines={2} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 24 : 14, color: 'black', }}>{`${item.companyTitle}`}</Text>
                                        <Text numberOfLines={2} style={{ fontFamily: 'PoppinsMedium', fontSize: WIDTH > maxScreenWidth ? 18 : 12, color: 'black', }}>{`${item.project}`}</Text>
                                        <View style={{ marginVertical: 10, }}>
                                            <FlatList
                                                data={item.descDATA}
                                                renderItem={({ item }) => (
                                                    <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 14, color: 'black', }}>{`\u2022 ${item} `}</Text>
                                                )}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 0, borderRadius: 10, borderColor: 'lightgrey',alignSelf:'flex-end',borderWidth:0,borderColor:'red', }}>
                                        {/* know more button */}
                                        <Pressable
                                            onPress={() => {
                                                navigation.navigate('KnowMoreScreen',{
                                                    selectedContentAppData:item
                                                })
                                            }}
                                            style={{
                                                flexDirection: 'row', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', marginVertical: 10,
                                                paddingHorizontal: 20, paddingVertical: 10, alignSelf: WIDTH > maxScreenWidth ? 'flex-end' : 'center', justifyContent: 'center', alignContent: 'center',
                                            }}>
                                            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 16, color: 'black', marginHorizontal: 0, alignSelf: 'center', }}>{`Know More`}</Text>
                                            {/* <EvilIcons name="arrow-right" size={28} color="grey" style={{marginHorizontal:5,}} /> */}
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default Mydevexperience