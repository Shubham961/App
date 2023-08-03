import React, {useEffect} from 'react';
import {StatusBar, Alert, Linking, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens'; // import screens package
import HomeScreen from './src/pages/HomeScreen';
import ChatScreen from './src/pages/ChatScreen';
import MapScreen from './src/pages/MapScreen';
import MessagesScreen from './src/pages/MessagesScreen';
// Ignore log notification by message:


// Ignore all log notifications:
disableRedBox = true;

const {Navigator, Screen} = createNativeStackNavigator();

enableScreens(); // enable screens package  

export default function App() {

  return (
      <NavigationContainer>
        <StatusBar translucent={false} />
        <Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right', // add animation option
            gestureDirection: 'horizontal',
            gestureEnabled: true,
          }}
          headerMode="none">
          <Screen name="HomeScreen" component={HomeScreen} />
          <Screen name="ChatScreen" component={ChatScreen} />
          <Screen name="MapScreen" component={MapScreen} />
          <Screen name="MessagesScreen" component={MessagesScreen} />
          {/* <Screen
            name="EditTransactionDetails"
            component={EditTransactionDetails}
          /> */}
        </Navigator>
      </NavigationContainer>
  );
}