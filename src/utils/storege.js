//buscar favoritos
//Slavar um novo favorito
//remover um favorito da lista

import AsyncStorage from "@react-native-async-storage/async-storage";


export async function getFavorities(key){

  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || []

}

export async function saveFaforite(key, neyItem){
  let myfavorities = await getFavorities(key)

  let hasItem = myfavorities.some(item => item.id === neyItem.id)
  
  if(hasItem){
    console.log("este item ja esta salvo")
    return
  }

  myfavorities.push(neyItem)

  await AsyncStorage.setItem(key, JSON.stringify(myfavorities))

  console.log("salvo com sucesso!")

}

export async function removeItem(id){

  let recipes = await getFavorities('@appreceitas')

  let myfavorities = recipes.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@appreceitas', JSON.stringify(myfavorities))
  console.log("deletado com sucesso!")

  return myfavorities
}

export async function isFavorite(recipe){
  
    let myRecipes = await getFavorities('@appreceitas')

    const favorite = myRecipes.find(item => item.id === recipe.id)

    if(favorite){
      return true
    }

    return false
}
