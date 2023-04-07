import React from 'react';
import { Text, View } from 'react-native';



export function IngredietList({data}) {
  return (
    <View className="bg-white w-full flex-row items-center justify-between py-4 px-2 rounded-md mb-4" >
      <Text className="font-bold text-lg">{data.name}</Text>
      <Text className="text-base">{data.amount}</Text>

    </View>
  );
}