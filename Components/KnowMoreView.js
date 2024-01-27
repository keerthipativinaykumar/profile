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
import MyProjectsView from './MyProjectsView';

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

const KnowMoreView = ({ selectedContentAppData }) => {

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

    // aboutApp
    // statiticsAboutAppUsers
    // activeUsers
    // Role
    // AppGlimpse

    return (
        // {/* about me body */}
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
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`About App ${selectedContentAppData?.aboutApp}`}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`Statics`}</Text>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, marginHorizontal: 10, marginVertical: 10, }}>
                <View style={{ justifyContent: 'center', alignContent: 'center', }}>
                    <Text numberOfLines={1} style={{ alignSelf: 'center', marginHorizontal: 10, fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 14, color: 'black', }}>{`${selectedContentAppData?.statiticsAboutAppUsers}`}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center', }}>
                    <Text numberOfLines={1} style={{ alignSelf: 'center', marginHorizontal: 10, fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 14, color: 'black', }}>{`${selectedContentAppData?.activeUsers}`}</Text>
                </View>
            </View>
            {/* 
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`Time`}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`Initial Goals`}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`Goals Acheived`}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`Learnings`}</Text>
             */}
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 18 : 18, color: 'black', }}>{`App Glimpse`}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'PoppinsBold', fontSize: WIDTH > maxScreenWidth ? 14 : 14, color: 'black', }}>{`Coming Soon`}</Text>
            <MyProjectsView Title={'Check Others'} />
        </View>
    )
}

export default KnowMoreView