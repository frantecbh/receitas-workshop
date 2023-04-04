
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';

import { Entypo } from '@expo/vector-icons'

export function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const { data } = route.params


  useLayoutEffect(() => {

    navigation.setOptions({
      title: data ? data.name : "Detalhes da Receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("Testando o botao")}>
          <Entypo name='heart' size={28} color="red" />
        </Pressable>
      )
    })

  }, [navigation, data])

  return (
    <View className="bg-blue-900">
      <Text>{data.name}</Text>
    </View>
  );
}