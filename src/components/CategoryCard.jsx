import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
/** import tailwind */
import tw from 'twrnc';

const CategoryCard = ({ data, index, active, pressFunction }) => {
  return (
    <TouchableOpacity
      onPress={pressFunction}
      style={tw`flex-row flew-wrap items-center py-3 px-4 rounded-xl space-x-2 ${
        active === index ? `bg-gray-400` : `bg-slate-200`
      }`}
    >
      <View style={tw`bg-white p-1 rounded-lg`}>
        <Image source={data.Image} style={tw`h-10 w-10`} />
      </View>
      <Text style={tw`font-semibold ${index === active ? `text-white` : ``}`}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
