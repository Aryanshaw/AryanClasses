/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';
import AppLoader from './src/screens/Apploader';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login'

// import {

//  useFonts,

//   Nunito_600SemiBold,
//   Nunito_600SemiBold_Italic,
//   Nunito_700Bold,
//   Nunito_700Bold_Italic,

// } from '@expo-google-fonts/nunito'

const App = () => {
  const Stack = createNativeStackNavigator();

  // let[fontsLoaded] = useFonts({
  //   Nunito_600SemiBold,
  // Nunito_600SemiBold_Italic,
  // Nunito_700Bold,
  // Nunito_700Bold_Italic,
  // })

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splashscreen"
         >
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="splashscreen"
            component={SplashScreen}
            options={{headerShown: false}}
            
          />

          <Stack.Screen
            name="Student"
            component={UserData}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Course"
            component={Course}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="apploader"
            component={AppLoader}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
