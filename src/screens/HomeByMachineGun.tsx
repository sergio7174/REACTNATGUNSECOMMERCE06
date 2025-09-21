/* screens/HomeByMachineGun.js */

import React, { Component } from "react";
import { Button, View, Text, ScrollView, Image } from "react-native";
import Header from "../screens/Header";
/** import tailwind */
import tw from 'twrnc';
import { dataMachineGun, getProducts  } from "../data/MachineGun";
import ShowProductList from "../screens/ShowProductsList";
import Footer from "../components/Footer";
import HeaderGoBackStack from "../components/HeaderGoBackStack";


export default function HomeByMachineGun({navigation}) {


    const Dataproducts:any = getProducts();

    //alert("Estoy en HomeBYCowboyGun - line 13 - Data.name: "+ Data.name);
    //alert("Estoy en HomeBYCowboyGun - line 13 - Data.image: "+ Data.Image);

  return (
    <>
    <Header/>
    {/**** Gun Category block ***********/}
    <ScrollView style={tw`bg-state-200`}>
      <View style={tw`flex-column flew-wrap items-center py-2 px-4 rounded-xl space-x-2 bg-gray-400 m-10
      `}
    >
    {dataMachineGun.map((item, index) => (
        <>
    
      <View style={tw`bg-white p-1 rounded-lg`}>
        <Image source={item.image} style={tw`h-10 w-10`} />
      </View>
      <Text style={tw`font-semibold text-white}`}>
        {item.name}
      </Text>
      </>
    ))}
    </View>
    </ScrollView>
{/**** End of Gun Category block ***********/}
{/**** CowboyGunShop block Begining ***********/}

{dataMachineGun.map((item, index) => (
        <>
      <View style={tw`mx-4`}>
        <Text style={tw`text-3xl font-semibold text-center mb-8`}>
           Shop <Text style={{color:'#E23D28'}}>{item.category}</Text> Collection
        </Text>     
     </View>
      </>
    ))}

  <View style={tw`mb-12 mx-4`}>    
        <ShowProductList products={Dataproducts}/>
   </View>

{/**** CowboyGunShop block End ***********/}
<HeaderGoBackStack/>
 <Footer />
   </> 
  );
}