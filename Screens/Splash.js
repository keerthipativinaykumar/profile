import { View, Text, Image, Pressable, FlatList, Linking, Platform, } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions } from 'react-native-web';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const SplashView = () => {

    const navigation = useNavigation();

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

    const [showStepOne, setShowStepOne] = useState(false);
    const [showStepTwo, setShowStepTwo] = useState(false);
    const [showStepThree, setShowStepThree] = useState(false);

    const [fontsLoaded] = useFonts({
        'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
        'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
        'MontserratBold': require('../assets/fonts/MontserratBold.ttf'),
        'MontserratMedium': require('../assets/fonts/MontserratBold.ttf'),
        'MontserratRegular': require('../assets/fonts/MontserratRegular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // await SplashScreen.hideAsync();
            // setTimeout(() => {
            //     navigation.dispatch(StackActions.replace('Home'))
            // }, 1500);
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#e3c2ab',
            justifyContent: 'center',
            alignContent: 'center',
            height: HEIGHT,
            width: WIDTH,
        }}
        // onLayout={onLayoutRootView}
        >
            <View style={{ alignSelf: "center", justifyContent: 'space-around', alignContent: "space-around", flexDirection: 'row', }}>
                <View style={{ borderWidth: 4, borderColor: "#fff", borderRadius: 100, justifyContent: 'center', alignContent: "center", }}>
                    <Image
                        resizeMode='contain'
                        source={require('../assets/images/VinayBG.png')}
                        style={{ width: 125, height: 125, borderRadius: 100, alignSelf: "center", }}
                    />
                </View>
                <View style={{ alignSelf: "center", marginLeft: 18, }}>
                    <Text style={{ fontFamily: 'MontserratBold', fontSize: 32, color: 'black' }}>{`VINAY KUMAR KEERTHIPATI`}</Text>
                    <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`Mobile App Developer`}</Text>
                    {/* <Text style={{ fontFamily: 'MontserratMedium', fontSize: 24, color: 'black' }}>{`Product | Tech`}</Text> */}
                    <View style={{ flexDirection: "row", marginTop: 12, }}>
                        <Pressable
                            onPress={() => {
                                // notion profile url
                                Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ width: 42, height: 42, borderRadius: 100, borderWidth: 3, borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            {/* <Entypo name="linkedin-with-circle" size={40} color="black" style={{ alignSelf: 'center', }} /> */}
                            <Image
                                resizeMode="stretch"
                                style={{ width: 40, height: 40, alignSelf: 'center', borderRadius: 100, }}
                                source={require('../assets/images/Notion_app_logo.png')}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                // linkedin profile url
                                Linking?.openURL(`https://linkedin.com/in/keerthipativinaykumar`)
                            }}
                            style={{ width: 42, height: 42, borderRadius: 100, borderWidth: 3, borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Entypo name="linkedin-with-circle" size={40} color="black" style={{ alignSelf: 'center', }} />
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                // twitter profile url
                                Linking?.openURL(`https://x.com/vinaykumarrajuk`)
                            }}
                            style={{ width: 42, height: 42, borderRadius: 100, borderWidth: 3, borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Entypo name="twitter-with-circle" size={40} color="black" style={{ alignSelf: 'center', }} />
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                // notion profile url
                                Linking?.openURL("mailto:keerthipativinaykumar@gmail.com")
                            }}
                            style={{ width: 42, height: 42, borderRadius: 100, borderWidth: 3, borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Entypo name="mail-with-circle" size={40} color="black" style={{ alignSelf: 'center', }} />
                        </Pressable>
                    </View>
                </View>
            </View>
            {/* <View style={{ alignSelf: "center", marginTop: 24, }}>
                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 26, color: 'black' }}>{`What i can do`}</Text>
                <View style={{flexDirection:Platform?.OS == "web" ?"row": "row",justifyContent:"space-around",alignContent:"space-around",}}>
                <View style={{ borderWidth: 0, borderRadius: 8, borderColor: "#fff", marginTop: 6, justifyContent: 'center', alignContent: "center", }}>
                    <Pressable
                        style={{ borderWidth: 0.5, borderRadius: 8, borderColor: "#fff", marginTop: 6, padding: 12, width: 225,height:225,}}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Ideation and Requirement Analysis`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Planning`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Design`}</Text>
                        </View>
                    </Pressable>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 20, color: 'black', marginTop: 6, alignSelf: "center", }}>{`Stage 1`}</Text>
                </View>
                <View style={{ borderWidth: 0, borderRadius: 8, borderColor: "#fff", marginTop: 6, justifyContent: 'center', alignContent: "center", }}>
                    <Pressable
                        style={{ borderWidth: 0.5, borderRadius: 8, borderColor: "#fff", marginTop: 6, padding: 12, width: 225,height:225,}}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Development`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Testing`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Deployment`}</Text>
                        </View>
                    </Pressable>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 20, color: 'black', marginTop: 6, alignSelf: "center", }}>{`Stage 2`}</Text>
                </View>
                <View style={{ borderWidth: 0, borderRadius: 8, borderColor: "#fff", marginTop: 6, justifyContent: 'center', alignContent: "center", }}>
                    <Pressable
                        style={{ borderWidth: 0.5, borderRadius: 8, borderColor: "#fff", marginTop: 6, padding: 12,width: 225,height:225, }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Maintenance`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 6, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black' }}>{`*`}</Text>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', marginLeft: 6, }}>{`Documentation & Presentation`}</Text>
                        </View>
                    </Pressable>
                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 20, color: 'black', marginTop: 6, alignSelf: "center", }}>{`Stage 3`}</Text>
                </View>
                </View>
            </View> */}
        </View>
    )
}

export default SplashView