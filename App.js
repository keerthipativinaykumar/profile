import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashView from './Screens/Splash';
import { useLayoutEffect, useMemo, useState } from 'react';
import AboutMe from './Screens/AboutMe';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';
import KnowMore from './Screens/KnowMore';
import Skills from './Screens/Skills';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Splash: 'splash',
    Home: 'main_home',
    AboutmeScreen: 'about_me_vinay_kumar_keerthipati',
    MyprojectsScreen: 'projects_of_vinay_kumar_keerthipati',
    KnowMoreScreen: 'in_detail_about_a_project_done_by_vinay_kumar_keerthipati',
  },
};

const linking = {
  prefixes: [

  ],
  config,
};

export default function App() {

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

  const RenderReturnStacks = useMemo(() => (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashView} options={{ headerShown: false }} />
      <Stack.Screen name="AboutMe" component={AboutMe} options={{ headerShown: false }} />
      <Stack.Screen name="Experience" component={Experience} options={{ headerShown: false }} />
      <Stack.Screen name="Projects" component={Projects} options={{ headerShown: false }} />
      <Stack.Screen name="Skills" component={Skills} options={{ headerShown: false }} />
      {/* <Stack.Screen name="KnowMore" component={KnowMore} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  ), [width, height])

  return (
    // <View style={{
    //   width: width,
    //   height: height,
    //   backgroundColor: '#e3c2ab',
    // }}>
    <NavigationContainer
      // linking={linking}
      fallback={<SplashView />}
    >
      {RenderReturnStacks}
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
