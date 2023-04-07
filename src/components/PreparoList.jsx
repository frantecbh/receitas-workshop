import { ScrollView, Text, View } from "react-native";



export function PreparoList({data}) {
  return (
   
    <View className=" flex-row px-3 mb-1">
      <Text className="font-bold text-base" >{data.id} - </Text>
      <Text className="text-base">{data.text}</Text>
    </View>
   
  );
}