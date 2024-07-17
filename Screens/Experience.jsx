import { View, Text, Image, Pressable, FlatList, StyleSheet, Linking, Platform, Dimensions, } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Experience = () => {

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

                    <Text style={{ fontFamily: 'MontserratMedium', fontSize: 16, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start", marginTop: 2, }}>{`Experience`}</Text>
                </View>

                <View
                    style={{
                        borderWidth: 0.5, borderColor: '#fff',
                        borderRadius: 4, padding: 6,
                        marginVertical: 6,
                    }}>
                    <Text style={{ marginTop: 6, fontFamily: 'PoppinsMedium', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`E-commerce`}</Text>
                    <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Company: Finvive`}</Text>
                    <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Technologies: WordPress, Java, React Native (Expo)`}</Text>
                    <Text style={{ marginBottom: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Developed custom Android apps with tailored configurations.`}</Text>
                </View>

                <View
                    style={{
                        borderWidth: 0.5, borderColor: '#fff',
                        borderRadius: 4, padding: 6,
                        marginVertical: 6,
                    }}>
                    <Text style={{ marginTop: 1, fontFamily: 'PoppinsMedium', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`News Journalism and Print Media`}</Text>
                    <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Company: Eenadu`}</Text>
                    <Text style={{ marginTop: 6, fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Technologies: (Specify Technologies, if applicable)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`ETV Election App (Private)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`HRMS App (Private)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Latency Checker App (Private)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Eenadu Official News App (Public)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Ramoji Ticket Booking App (Alpha)`}</Text>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: 'black', alignSelf: WIDTH < 600 ? "center" : "flex-start" }}>{`Ticket Scanner App (Alpha)`}</Text>
                </View>
            </View>
        </View>
    )
}

export default Experience

const styles = StyleSheet.create({})