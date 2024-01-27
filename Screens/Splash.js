import { View, Text } from 'react-native'
import React, { useCallback, useLayoutEffect } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions } from 'react-native-web';

SplashScreen.preventAutoHideAsync();

const SplashView = () => {

    const navigation = useNavigation();

    const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

    const [fontsLoaded] = useFonts({
        'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
            setTimeout(() => {
                navigation.dispatch(StackActions.replace('Home'))
            }, 1500);
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignContent: 'center',
            height: HEIGHT,
            width: WIDTH,
        }}
            onLayout={onLayoutRootView}
        >
            <Text style={{ textAlign: 'center', fontFamily: 'PoppinsBold', fontSize: 32, alignSelf: 'center', color: 'black' }}>{`VINAY KUMAR KEERTHIPATI`}</Text>
        </View>
    )
}

export default SplashView