import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/layout/HomeView';
import CheckTicket from './src/layout/CheckSticket';
import CheckTicketByCamera from './src/layout/CheckSticketByCamera';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();

  return (


    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="CheckTicket" component={CheckTicket} options={{ title: 'Check Ticket' }} />
          <Stack.Screen name="CheckTicketByCamera" component={CheckTicketByCamera} options={{ title: 'Check by cam' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
