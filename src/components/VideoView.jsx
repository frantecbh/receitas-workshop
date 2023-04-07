import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


import {Feather} from '@expo/vector-icons'


export function VideoView({handleClose, videoUrl}) {
  return (
    <SafeAreaView className="flex-1 w-full" >

      <TouchableOpacity className="w-full px-2 flex-row bg-green-600 py-4" onPress={handleClose}>       
        <Feather name='arrow-left' size={24} color="#fff" />
        <Text className="ml-2 text-white text-base font-semibold">Voltar</Text>
      </TouchableOpacity>
      <WebView className="flex-1 w-full"  source={videoUrl} />

    </SafeAreaView>
  );
}