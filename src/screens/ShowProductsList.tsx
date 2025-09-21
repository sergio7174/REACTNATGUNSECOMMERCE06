import { View, Text, FlatList } from "react-native";
import { SIZES } from "../constants/index";
import ProductCardView from "./ProductCardView";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

export default function ShoProductList({ products }) {
 
    const navigation:any = useNavigation();

    function renderProduct({item : product}) {
        
        return(
    
        <>
        
      <ProductCardView
        {...product}
        onPress={() =>
        /**** navigate to ProductDetails sending the productId throught the route as a param **/ 
        {
          
          //alert("Estoy en ShowProductList - line 23 - item.id: "+product.id)
        
          let productId = product.id;
          let image = product.image;
          let price = product.price;
          let name = product.name;
         navigation.navigate("ProductDetails",  { productId, image,price,name})
        }}
      />

      </>

        )
  }

  return (
     <>
   
    <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', width:'150%', margin:5, alignContent:'center' }}
            showsHorizontalScrollIndicator={true}
            
          />

     </>    

  );
}
