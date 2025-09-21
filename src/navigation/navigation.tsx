import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from '../firebase/firebaseConfig'; // Assuming you have your firebase config set up

import SignInScreen from "../screens2/SignInScreen";
import SignUpScreen from "../screens2/sign-up"
import { RootStackParamList } from "../../types";
import MainNavigation from "./HomeNavigation";
import ProductDetails from '../screens/ProductDetails';
import checkout from '../components/products/checkout';

import HomeByCowboyGun from '../screens/HomeByCowboyGun';
import HomeByGlockGun from '../screens/HomeByGlockGun';
import HomeByMachineGun from '../screens/HomeByMachineGun';





const Stack:any = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated]:any = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  return (
            <>
            
      <Stack.Navigator >
      {!isAuthenticated && (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        </>
      )}
      {isAuthenticated && (
        <>
        
           <Stack.Screen 
             name="MainNavigation" 
             component={MainNavigation} 
             options={{ headerShown: false }}/>

           <Stack.Screen 
             name="ProductDetails" 
             component={ProductDetails} 
             options={{ headerShown: false }}/>

           <Stack.Screen 
             name="checkout" 
             component={checkout} 
             options={{ headerShown: false }}/>

          <Stack.Screen 
             name="HomeByCowboyGun" 
             component={HomeByCowboyGun} 
             options={{ headerShown: false }}/>
          
          <Stack.Screen 
             name="HomeByGlockGun" 
             component={HomeByGlockGun} 
             options={{ headerShown: false }}/>

         <Stack.Screen 
             name="HomeByMachineGun" 
             component={HomeByMachineGun} 
             options={{ headerShown: false }}/>


            
        </>
      )}  

    </Stack.Navigator>

  </> 

  );
};

export default function Navigation() {
  return (
 
    <NavigationContainer> 
      
     <RootNavigator />
     
    </NavigationContainer>
   
  );
}
