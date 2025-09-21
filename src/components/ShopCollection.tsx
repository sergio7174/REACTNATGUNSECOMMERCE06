import { View, Text } from "react-native";
import tw from "twrnc";
import ShowProductList from "../screens/ShowProductsList";
import { getProducts } from "../data/Data";

export default function ShopCollection({navigation}) {

const Dataproducts:any = getProducts();

  return (
    <>
   <View style={tw`mb-12`}>
   
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>
        Shop Collection
      </Text> 
      <View style={{ display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center'}}>    
        <ShowProductList products={Dataproducts}/>
      </View>  
   </View>
    </>
  );
}
