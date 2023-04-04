
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Logo } from '../components/Logo';

import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import axios from 'axios';
import { CardList } from '../components/CardList';

export function Home() {

  const [search, setSearch] = useState("")
  const [receitas, setReceitas] = useState([])

  const handleSearch = () => {
    console.log(search)
  }

  const listReceitas = async () => {
    const response = await 

    api.get("/foods")
    setReceitas(response.data)
  }

  useEffect(() => {

    listReceitas()

  }, [])
  
  const receitasFiltradas = receitas.filter((receita) =>{
    return receita.name.includes(search)
  })

  return (
    <SafeAreaView className="flex-1 bg-zinc-100 pt-9 px-4">
        <Logo />
        <Text className="text-2xl font-bold text-zinc-900">Encontre a receita</Text>
        <Text className="text-2xl font-bold text-zinc-900">que combina com você</Text>

        <View className="flex-row w-full rounded-lg my-4 bg-white border border-zinc-400 px-2 justify-between items-center">
          <TextInput 
          placeholder='Digite o nome da receita...' 
          className="w-[90%] max-w-[90%] h-14 text-zinc-600 text-lg"
          value={search}
          onChangeText={(text) => setSearch(text) }
          />
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name='search' size={28} color="#4cbe6c" />
          </TouchableOpacity>
        </View>

        <FlatList
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