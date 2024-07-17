import { View, Text, Image, Pressable, FlatList, Linking, Platform, Dimensions, } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const SplashView = () => {

    const navigation = useNavigation();

    // const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    // const maxScreenWidth = 400;

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

    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    const [dimensions, setDimensions] = useState({ window, screen });

    const [width, setWidth] = useState(dimensions?.window?.width);
    const [height, setHeight] = useState(dimensions?.window?.height);
    const [WIDTH, setWIDTH] = useState(dimensions?.screen?.width);
    const [HEIGHT, setHEIGHT] = useState(dimensions?.screen?.height);
    const [ITEM_WIDTH, setITEM_WIDTH] = useState(dimensions?.window?.width);
    const [ITEM_HEIGHT, setITEM_HEIGHT] = useState(dimensions?.window?.height);

    useLayoutEffect(() => {
        let isActive = true;
        if (isActive) {
            setWidth(dimensions?.window?.width);
            setHeight(dimensions?.window?.height);
            setWIDTH(dimensions?.screen?.width);
            setHEIGHT(dimensions?.screen?.height);
            setITEM_WIDTH(dimensions?.window?.width);
            setITEM_HEIGHT(dimensions?.window?.height);
        }
        return () => {
            isActive = false;
        };
    }, [dimensions]);

    useLayoutEffect(() => {
        let isActive = true;
        if (isActive) {
            Dimensions.addEventListener("change", ({ window, screen }) => {
                setDimensions({ window, screen });
            });
        }
        return () => {
            isActive = false;
        };
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#e3c2ab',
            justifyContent: 'center',
            alignContent: 'center',
            // height: height,
            // width: width,
            // height: dimensions?.window?.height,
            // width: dimensions?.window?.width,
        }}
        // onLayout={onLayoutRootView}
        >
            <View style={{ alignSelf: "center", justifyContent: 'space-around', alignContent: "space-around", flexDirection: WIDTH < 600 ? "column" : 'row', }}>
                <View style={{
                    width: 125, height: 125, borderWidth: 4,
                    borderColor: "#fff", borderRadius: 100, justifyContent: 'center',
                    alignContent: "center", alignSelf: "center", marginBottom: WIDTH < 600 ? 12 : 0
                }}>
                    <Image
                        resizeMode='contain'
                        source={require('../assets/images/VinayBG.png')}
                        style={{ flex: 1, borderRadius: 100, alignSelf: "center", }}
                    />
                </View>
                <View style={{ alignSelf: WIDTH < 600 ? "center" : "center", marginLeft: 18, marginBottom: WIDTH < 600 ? 12 : 0, justifyContent: "center", alignContent: "center", }}>
                    <Text numberOfLine={2} style={{ marginBottom: WIDTH < 600 ? 6 : 0, fontFamily: 'MontserratBold', fontSize: 32, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start", textAlign: WIDTH < 600 ? "center" : "flex-start" }}>{`VINAY KUMAR KEERTHIPATI`}</Text>
                    <Text style={{ fontFamily: 'MontserratRegular', fontSize: 24, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Mobile App Developer`}</Text>
                    {/* <Text style={{ fontFamily: 'MontserratMedium', fontSize: 24, color: 'black' }}>{`Product | Tech`}</Text> */}
                    <View style={{ flexDirection: "row", marginTop: 12, alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>
                        {/* <Pressable
                            onPress={() => {
                                // notion profile url
                                Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ width: 42, height: 42, borderRadius: 100, borderWidth: 3, borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            {/* <Entypo name="linkedin-with-circle" size={40} color="black" style={{ alignSelf: 'center', }} /> 
                            <Image
                                resizeMode="stretch"
                                style={{ width: 40, height: 40, alignSelf: 'center', borderRadius: 100, }}
                                source={require('../assets/images/Notion_app_logo.png')}
                            />
                        </Pressable> */}
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

                    {/* links to target sections */}
                    <View style={{ flexDirection: "row", marginTop: 12, alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>
                        <Pressable
                            onPress={() => {
                                navigation?.dispatch(StackActions?.push("AboutMe"))
                                // notion profile url
                                // Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ borderRadius: 2, borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#000', borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`About Me`}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                navigation?.dispatch(StackActions?.push("Experience"))
                                // notion profile url
                                // Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ borderRadius: 2, borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#000', borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Experience`}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                navigation?.dispatch(StackActions?.push("Projects"))
                                // notion profile url
                                // Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ borderRadius: 2, borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#000', borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Projects`}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                navigation?.dispatch(StackActions?.push("Skills"))
                                // notion profile url
                                // Linking?.openURL(`https://vinaykumarkeerthipati.notion.site/Resume-9a7389cef30345439afd72f1122a6293`)
                            }}
                            style={{ borderRadius: 2, borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#000', borderColor: "#fff", justifyContent: "center", alignContent: 'center', marginRight: 12, }}>
                            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Skills`}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SplashView