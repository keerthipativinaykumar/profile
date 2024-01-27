import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashView from './Screens/Splash';
import AboutmeScreen from './Screens/AboutmeScreen';
import HomeScreen from './Screens/Home';
import MyprojectsScreen from './Screens/MyprojectsScreen';
import KnowMoreScreen from './Screens/KnowMoreScreen';

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
  return (
    <NavigationContainer
    linking={linking}
    fallback={<SplashView/>}
    >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={SplashView} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutmeScreen" component={AboutmeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyprojectsScreen" component={MyprojectsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="KnowMoreScreen" component={KnowMoreScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
