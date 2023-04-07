import { Text } from "react-native";

import { View } from 'moti'

export function Logo() {
  return (
    <View 
    className="bg-green-400  self-start p-2 px-5 rounded-t-lg rounded-bl-lg rounded-br-[32px] mb-2"
    from={{
      opacity:0,
      translateX: -50
    }}
    animate={{
      opacity: 1,
      translateX:0
    }}
    transition={{    
      type: "spring",
      duration: 850
    }}
    
    >
        <Text className="text-lg text-white font-bold">Receita Fácil</Text>
    </View>
  );
}