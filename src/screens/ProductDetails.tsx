import {
  ScrollView,
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Button,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { getProduct } from "../data/Data";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import Cart from "../screens/(tabs)/cart";
import { useCart } from "../context/CartContext";

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
const ProductDetails = ({route, navigation }) => {

type TransformedProduct = Omit<Product, "image"> & {
  image: { uri: string }; // Transformed image type as object with uri property
};
const { addToCart } = useCart();

  // getting the productId from the route params  

const [product, setProduct]:any = useState("");

const { productId, image, price,name } = route.params;
const id:any = productId

//alert("Estoy en productsDetails - line 60 - id:"+id);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <TouchableOpacity /*onPress={() => addToWishlist(product.id)}*/>
          <Ionicons name="heart-outline" size={28} color={COLORS.red} />
        </TouchableOpacity>
      </View>
      <View style={style.imageContainer}>
        <Image
          source={image}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={style.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 200,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {name}
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 10,
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
             $ {price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {product?.description}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View >
                
              </View>
            </View>

            <View style={style.buyBtn}>
              <TouchableOpacity onPress={() => addToCart({ id, name, price, image: image.uri })}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.offwhite,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 30,
    marginTop: -20,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.black,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 18 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.secondary,
    width: 73,
    height: 40,
    justifyContent: "center",
    marginLeft: 55,
    marginStart: 65,
    borderRadius: 20,
    
  },
});

export default ProductDetails;
