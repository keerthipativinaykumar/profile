import { View, Text, Animated, TextInput, Pressable } from 'react-native'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { StackActions, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Dimensions, FlatList, ScrollView } from 'react-native-web';
import AboutMe from '../Components/AboutMe';
import Mydevexperience from '../Components/Mydevexperience';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Profile from '../Components/Profile';

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

const HomeScreen = () => {

    const { width : WIDTH, height : HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

    // const width = '100%';

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
        <View style={[{ flex: 1, backgroundColor: '#fff', }, {
width:WIDTH,
height:HEIGHT,

        },]}>
            
                            {/* header */}
                            <Header />
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff',
                // width: width*0.9,
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginHorizonatal: 20,
                marginVertical: 20,
            }}
            >

                <Profile />
                {/* about me body */}
                <AboutMe />

                {/* dev experiance section */}
                <Mydevexperience />

                {/* Testmonials */}
                {/* <Testmonials /> */}

                {/* Footer */}
                <Footer />

            </ScrollView>
        </View>
    )
}

export default HomeScreen;