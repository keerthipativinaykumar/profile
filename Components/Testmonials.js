import { View, Text, Animated, TextInput, Pressable } from 'react-native'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { StackActions, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { Dimensions, FlatList } from 'react-native-web';

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
        projectManager: 'Suresh',
        projectManagerImage: require('../assets/images/eenaduappshot.png'),
        descDATA: 'I am a quick learner and have a passion for technology and innovation. I am looking for a position where I can utilize my skills and experience to help a company grow and succeed.',
    },
    {
        id: 2,
        companyTitle: 'Margadarsi Computers - Eenadu',
        projectManager: 'Suresh',
        projectManagerImage: require('../assets/images/eenaduappshot.png'),
        descDATA: 'I am a quick learner and have a passion for technology and innovation. I am looking for a position where I can utilize my skills and experience to help a company grow and succeed.',
    }
]

const Testmonials = () => {

    const { width : WIDTH, height : HEIGHT } = Dimensions.get('window');
    const maxScreenWidth = 400;

    const navigation = useNavigation();
    // const isFocused = useIsFocused();

    const [fontsLoaded] = useFonts({
        'PoppinsBlack': require('../assets/fonts/PoppinsBlack.ttf'),
        'PoppinsBold': require('../assets/fonts/PoppinsBold.ttf'),
        'PoppinsExtraBold': require('../assets/fonts/PoppinsExtraBold.ttf'),
        'PoppinsMedium': require('../assets/fonts/PoppinsMedium.ttf'),
        'PoppinsRegular': require('../assets/fonts/PoppinsRegular.ttf'),
        'PoppinsSemiBold': require('../assets/fonts/PoppinsSemiBold.ttf'),
        'PoppinsLight': require('../assets/fonts/PoppinsLight.ttf'),
    });

    const [bgColor, setBgColor] = useState('red');
    // const [dataScroll, setDataScroll] = useState(DATA?.length);
    const [presentView, setPresentView] = useState(1);
    const list = useRef(null);
    const [endReached, onEndReached] = useState(false);
    // const scrollValue = useRef(new Animated.Value(0)).current;

    // const translateX = scrollValue.interpolate({
    //     inputRange: [0, width],
    //     outputRange: [0, width * 0.255],
    // });

    const headerScrollView = useRef(null);
    const itemScrollView = useRef(null);

    const [active, setActive] = useState(0);

    const TabBarScrollFailedItems = async () => {
        await itemScrollView.current?.scrollToIndex({ index: 0, viewPosition: 0.5, animated: false, });
        await setActive(0);
        await headerScrollView.current?.scrollToIndex({ index: 0, viewPosition: 0.5, animated: false, });
    };

    const tabBarKeyExtractor = useCallback((item, index) => index.toString());

    const TabDataBodyOnEndReached = useCallback(() => {
        // getTabsPrefrences(stateIdValue, DeviceUniqueId);
        onEndReached(true);
    });

    const TabViewScrollDataShiftUiPages = useCallback(async (e) => {
        const newIndex = await Math.round(e.nativeEvent.contentOffset.x / width);
        await active != newIndex && setActive(newIndex)
    });

    return (
        // {/* dev experiance section */}
        <View style={{
            justifyContent: 'center',
            alignContent: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
            elevation: 5,
            backgroundColor: '#f2f2f2',
            marginHorizontal: 20,
            marginVertical: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            alignSelf:'center',
            // width:width*0.98,
        }}>
            <FlatList
                data={projectDATA}
                ref={itemScrollView}
                horizontal
                // pagingEnabled
                // snapToInterval={700}
                initialScrollIndex={active}
                onScrollToIndexFailed={TabBarScrollFailedItems}
                onEndReachedThreshold={0.2}
                onEndReached={TabDataBodyOnEndReached}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={TabViewScrollDataShiftUiPages}
                style={[{
                        // flex: 1,
                    }, {
                        // backgroundColor: '#fff'
                    }]}
                containerContentStyle={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', }}
                onScroll={async (event) => {
                    console.log("event log : ", event.nativeEvent.contentOffset.x);
                }}
                renderItem={({ item, index }) => (
                    <View style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'lightgrey',
                        elevation: 5,
                        backgroundColor: '#ffffff',
                        marginHorizontal: 20,
                        marginVertical: 20,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        alignSelf: 'center',
                        // width: width*0.4,
                    }}>
                        <View style={{
                            // flex: 1,
                            // top: 30,
                            alignSelf:'center',
                            justifyContent: 'space-between',
                            alignContent: 'space-between',
                        }}>
                            <View style={{
                                width: '40%',
                                justifyContent: 'space-between', alignContent: 'space-between',
                                marginVertical: 5,
                                paddingVertical: 20,
                            }}>
                                {/* id | companyTitle | projectManager | projectManagerImage | descDATA */}
                                <Text style={{ fontFamily: 'PoppinsRegular', marginVertical: 30, borderWidth: 0, textAlign: 'center', fontSize: 16, alignSelf: "center", color: '#878787' }} >{`${item?.descDATA}`}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <View style={{
                                        width: 50, height: 50, borderRadius: 100, borderWidth: 1, borderColor: 'lightgrey',
                                    }}>
                                        <Image
                                            resizeMode='cover'
                                            style={{ alignSelf: 'center', width: 50, height: 50, borderRadius: 100, }}
                                            source={item?.projectManagerImage}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: 'PoppinsBold', marginVertical: 0, fontSize: 20, alignSelf: "center", color: '#343434' }} >{`${item?.projectManager}`}</Text>
                                        <Text style={{ fontFamily: 'PoppinsMedium', marginVertical: 0, fontSize: 18, alignSelf: "center", color: '#000000' }} >{`${item?.companyTitle}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            {/* <View style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            }} >
                <FlatList
                    data={projectDATA}
                    ref={headerScrollView}
                    initialScrollIndex={active}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={TabViewScrollDataShiftUiPages}
                    renderItem={({ item, index }) => (
                     <View style={{

                     }}>
                        <Text>{`jhkvjhd`}</Text>
                        </View>
                    )}
                />
            </View>  */}
        </View>
    )
}

export default Testmonials