import { View, Text, Image, Pressable, FlatList, StyleSheet, Linking, Platform, Dimensions, } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Skills = () => {

    const navigation = useNavigation();
        
            // const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
            // const maxScreenWidth = 400;
        
            const [showStepOne, setShowStepOne] = useState(false);
            const [showStepTwo, setShowStepTwo] = useState(false);
            const [showStepThree, setShowStepThree] = useState(false);
        
            const [fontsLoaded] = useFonts({
                'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
                'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
                'PoppinsMedium': require('../assets/fonts/PoppinsMedium.ttf'),
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
                    paddingLeft: 6,
                    paddingRight: 24,
                    paddingVertical: 24,
                }}
                >
                    <View style={{
                        margin: 24,
                    }}>
        
                        <View style={{ flexDirection: "row", marginBottom: 6, }}>
                            <Pressable
                                onPress={() => {
                                    navigation?.dispatch(StackActions?.pop(1));
                                }}
                                style={{ justifyContent: 'center', alignContent: 'center', marginRight: 6, }}>
                                <Ionicons name="chevron-back-circle-outline" size={24} color="black" style={{ alignSelf: WIDTH < 600 ? "center" : "flex-start" }} />
                            </Pressable>
        
                            <Text style={{ fontFamily: 'MontserratMedium', fontSize: 16, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start", marginTop: 2, }}>{`Skills`}</Text>
                        </View>
        
                        <View
                            style={{
                                borderWidth: 0.5, borderColor: '#fff',
                                borderRadius: 4, padding: 6,
                                marginVertical: 6,
                            }}>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsMedium', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Technologies & Tools`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Languages: JavaScript, Java`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Frameworks & Libraries: React Native, Expo, Redux, Context API`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`APIs: REST, GraphQL, Websockets, Firebase`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Cloud Services: Azure, AWS, Firebase`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Testing: Detox (E2E Testing)`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Other Tools: GitHub, GitHub Actions, Postman, Jira, Confluence`}</Text>
                        </View>
                        
                        <View
                            style={{
                                borderWidth: 0.5, borderColor: '#fff',
                                borderRadius: 4, padding: 6,
                                marginVertical: 6,
                            }}>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsMedium', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Development Practices`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Authentication & Authorization: JWT Tokens, API Keys`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Deployment: Azure Static Apps, AWS & Firebase Hosting, Netlify`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Analytics: Firebase Crashlytics, Firebase Analytics, Amplitude Analytics`}</Text>
                            <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Optimization: React Concepts, Dynamic Layouts, Notification Channels`}</Text>
                        </View>
                    </View>
                </View>
  )
}

export default Skills

const styles = StyleSheet.create({})