import React, { useEffect } from "react";
import Navigation from './src/navigation/navigation';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import { CartProvider } from "./src/context/CartContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";


export default function App() {

  const [loaded] = useFonts({
    PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
    PoppinsSemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("./src/assets/fonts/Poppins-Black.ttf"),
    PoppinsExtraBold: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
  });
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
                         
    return (
   <>
    <AuthProvider>
      <CartProvider>
        <SafeAreaProvider> 
           <Navigation/>
      </SafeAreaProvider>
      </CartProvider>   
    </AuthProvider>  
  


           
</>
    );
}