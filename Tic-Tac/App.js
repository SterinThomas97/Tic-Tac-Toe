import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet,Text, View} from 'react-native';
import Home from './screens/Home';
import Rules from './screens/Rules';
import Credits from './screens/Credits';


const Stack = createNativeStackNavigator();
export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={
            {
              title : 'Home'

            }
          }/>
          <Stack.Screen name="Rules" component={Rules} options={
            {
              title : 'Rules'
            }
          }/>
          <Stack.Screen name="Credits" component={Credits} options={
            {
              title : 'Credits'
            }
          }/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}


