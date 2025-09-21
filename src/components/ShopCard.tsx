/* components/ContactScreen.js */

import React, { Component } from "react";

import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useCart } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";


type Product = {
  id: string;
  productName: string;
  category: string;
  brand: string;
  price: number;
  caliber: string;
  weight: string;
  material: string;
  image: any;
  description: string;
  quantity: number;
};

type TransformedProduct = Omit<Product, "image"> & {
  image: { uri: string }; // Transformed image type as object with uri property
};

/*export default function ShopCard() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ShopCard Screen</Text>
    </View>
  );
}*/

export default function ShopCard({
  route,
  navigation,
  
  
}: {
  route: any
  navigation:any
}) {


  const router = useRouter();
  const { addToCart } = useCart();

// getting the productId from the route params  
  const { productId, image, price,name } = route.params;
  const id: any = productId


  return (
    <View style={tw`mx-2 mb-4 px-3 `}>
      <Pressable onPress={() => router.push(`/products/${productId}` as any)}>
        <View
          style={tw`flex items-center justify-center bg-gray-200 w-full h-48  mb-2 rounded-lg`}
        >
          <Image
            source={image}
            style={tw`w-full h-full`}
            resizeMode="contain"
          />
        </View>{" "}
        <Text style={tw`font-semibold text-xl`}>{name}</Text>
        <Text style={tw`font-semibold text-lg`}>{price}</Text>
      
      </Pressable>
      <View style={tw`mt-1`}>
        <AntDesign
          name="plus"
          size={24}
          color="black"
          onPress={() => addToCart({ id, name, price, image: image.uri })}
        />
      </View>
    </View>
  );
}
