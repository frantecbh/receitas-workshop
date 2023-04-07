
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Share, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { IngredietList } from '../components/IgredientList';
import { PreparoList } from '../components/PreparoList';
import { VideoView } from '../components/VideoView';
import { isFavorite, removeItem, saveFaforite } from '../utils/storege';

export function Detail() {
  const [modopreparo, setModoPreparo] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [favorite, setFavorite] = useState(false)


  const navigation = useNavigation()
  const route = useRoute()

  const { data } = route.params



  const handeModoPreparo = () => {
    setModoPreparo(state => !state)
  }


  const handleOpenVideo = () => {
    setIsModal(state => !state)
  }

  const handleFavoriteRecipe = async (recipe) => {
  
      if(favorite){
        await removeItem(recipe.id)
        setFavorite(state => !state)
      }else{
        await saveFaforite('@appreceitas', recipe)
        setFavorite(state => !state)
      }
   }
  


  useLayoutEffect(() => {


    async function getStatusFavorites(){
   
        const recipeFavorite = await isFavorite(data)
      console.log(recipeFavorite)
        setFavorite(recipeFavorite)
    }

    getStatusFavorites()

    navigation.setOptions({
      title: data ? data.name : "Detalhes da Receita",
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteRecipe(data)}>
          {
            favorite ?  (<Entypo name='heart' size={28} color="red" />) :
            (<Entypo name='heart-outlined' size={28} color="red" />)
          }
         
        </Pressable>
      )
    })

  }, [navigation, data, favorite])

  const shareReceita = async () => {
    try {
      Share.share({
        url: data.video,
        message: `Receita: ${data.name}\nIgredientes: ${data.total_ingredients}\nencontrei esta receita no aplicativo receita facil.`
      })
    } catch (error) {
      
    }
  }

  return (
    <ScrollView className="bg-zinc-100 pt-4 px-4" contentContainerStyle={{paddingBottom: 14}} showsVerticalScrollIndicator={false}  >
      <Pressable onPress={handleOpenVideo}>
        <View className="absolute z-10 top-0 left-0 right-0 bottom-0 items-center justify-center">
          <AntDesign name='playcircleo' size={48} color="#FAFAFA" />
        </View>
        <Image source={{uri: data.cover}} className="w-full h-52 rounded-xl" />
      </Pressable>

      <View className="mt-3 flex-row justify-between items-center mb-4">
        <View>
          <Text className="font-bold text-lg mb-1">{data.name}</Text>
          <Text className="text-base">ingredientes ({data.total_ingredients})</Text>
        </View>
        <Pressable onPress={shareReceita}>
            <Feather name='share-2' size={24} color="#121212" />
        </Pressable>
      </View>


      {
        data.ingredients.map((ingredient) => (
          <IngredietList key={ingredient.id} data={ingredient} />
          ))
      }

      <TouchableOpacity  onPress={handeModoPreparo}
      className="transition duration-200 my-4 bg-green-600 w-full rounded-md py-3 px-2 flex-row items-center justify-between" >
        <Text className="text-white font-bold">Modeo de Preparo</Text>
        <Feather name='arrow-right' size={24} color="#fff" />
      </TouchableOpacity>

      {
        modopreparo &&
        data.instructions.map(insturction => (
          <PreparoList key={insturction.id} data={insturction} />

        ))
      }   
      <Modal visible={isModal} animationType="slide">
        <VideoView
        handleClose={handleOpenVideo}
        videoUrl={{uri: data.video}}
        />
      </Modal>

    </ScrollView>


  );
}