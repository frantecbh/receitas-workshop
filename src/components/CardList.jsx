
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';



export function CardList({data}) {

  const navigation = useNavigation()

  const handleNavigate = () => {
 
    navigation.navigate("Detail", {
      data: data
    })
  }

  return (
    <TouchableOpacity activeOpacity={0.9} className="mb-4" onPress={handleNavigate}>
     <Image className="w-full h-52 rounded-2xl" source={{uri: data.cover }} />
     <View className="absolute bottom-4 px-4 z-50" >
      <Text className="text-lg text-white font-bold">{data.name}</Text>
      <Text className="text-white" >{data.total_ingredients} | {data.time} min</Text>
     </View>
    </TouchableOpacity>
  );
}