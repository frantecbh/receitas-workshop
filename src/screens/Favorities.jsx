
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { View } from 'react-native';
import { CardList } from '../components/CardList';
import { getFavorities } from '../utils/storege';


export function Favorities() {

  const [receitas, setReceitas] = useState([])

  const isFocused = useIsFocused()

  useEffect(() => {

    let isActive = true

    async function getRecipes() {
      const result = await getFavorities('@appreceitas')
      if (isActive) {
        setReceitas(result)
      }

    }
    if (isActive) {
      getRecipes()
    }

    return () => {
      isActive = false
    }

  }, [isFocused])


  return (
    <SafeAreaView className="flex-1 bg-zinc-100 px-4 pt-9">
      <Text className="text-zinc-900 font-bold text-2xl">Receitas Favoritas!</Text>

      {
        receitas.length === 0 && (
          <Text>Você não favoritou nenhuma Receita!</Text>
        )
      }
        <FlatList className="mt-4"
          data={receitas}
          
          keyExtractor={(item) => String(item.id)}
          renderItem={
            ({item}) => <CardList data={item} />
          }
          showsVerticalScrollIndicator={false}
        />

    </SafeAreaView>
  );
}