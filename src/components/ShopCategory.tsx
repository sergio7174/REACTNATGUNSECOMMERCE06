import { View, Text, Image, ScrollView,TouchableOpacity, } from "react-native";
import tw from "twrnc";
import { categoriesCard  } from "../data/categoriesCard";
import CategoryCard from "./CategoryCard"
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function ShopCategory() {

   const [active, setActive] = useState(0);
   const navigation:any = useNavigation(); // Access the navigation object using the hook

   const routerToGo = (item:any) => {

     alert("Im at HomeScreen - routerToGo Function - line 12 - and the item is: " + item.name);
     
     if (item.name == "Cowboy Gun") { navigation.navigate("HomeByCowboyGun")};
     if (item.name == "Glock Gun") { navigation.navigate("HomeByGlockGun")};
     if (item.name == "Machine Gun") { navigation.navigate("HomeByMachineGun")};
  }


  return (
    <View style={tw`mb-12`}>
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>
        Shop by Categories
      </Text>
    <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 26, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',flexWrap:'wrap', width:'100%' , backgroundColor:'#E5E4E2', padding: 20, borderRadius: 20}}
          >
            {categoriesCard.map((item, index) => (
             
             <CategoryCard
                data={item}
                key={index}
                active={active}
                index={index}
                pressFunction={() => {setActive(index), routerToGo(item)}}
              />
            ))}
     </ScrollView>                            
    </View>


  );
}