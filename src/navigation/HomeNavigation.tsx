import * as React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*** import routes */
import MainTabNavigation from './MainTabNavigation';
import ShopCard from '../components/ShopCard';
import contact from '../screens/(tabs)/contact';

const Stack:any = createNativeStackNavigator();



export default function HomeNavigation() {
  return (
          <>

      <Stack.Navigator >
           <Stack.Screen name="HomeTab" component={MainTabNavigation} options={{ headerShown: false }} />
           <Stack.Screen name="contact" component={contact} options={{ headerShown: false }} />
           <Stack.Screen name="ShopCard" component={ShopCard} options={{ headerShown: false }} />
        </Stack.Navigator>
     </>   
    )
}

