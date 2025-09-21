/* components/ContactScreen.js */

import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import Header from "../screens/Header";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import ShopCategory from "../components/ShopCategory";
import ShopCollection from "../components/ShopCollection";
import Footer from "../components/Footer";
import { ScrollView } from "react-native";
import Newsletter from "../components/Newsletter";
import SocialMedia from "../components/SocialMedia";

import tw from "twrnc";


export default function HomeScreen({navigation}) {
  return (
    <>
    <Header/>

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen at Last</Text>
    </View>

    <ScrollView style={tw`bg-white`}>
      <Hero />
      <Featured />
      <ShopCategory />
      <ShopCollection />
      <Newsletter />
      <SocialMedia />
      <Footer />
    </ScrollView>
    </>
  );
}