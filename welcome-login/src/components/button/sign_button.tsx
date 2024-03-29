import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

import normalize from 'react-native-normalize';

import { theme } from "@/theme";


type SingButtonProps = TouchableOpacityProps & {
  title: string
  titleColors: string
}

export function SignButton({ 
    title, 
    titleColors, 
    ...rest 
}: SingButtonProps ){
  return (
    <TouchableOpacity style={{ 
        width: normalize(300),
        height: normalize(56),
        backgroundColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
        margin: normalize(15),
      }} className="justify-center items-center rounded-lg" 
      {...rest}>
      <Text style={{ 
        width: normalize(300),
        textAlign: "center",
        textAlignVertical: "center",
        color: titleColors,        
      }} className="text-lg font-poppins-semibold">
        {title}
      </Text>      
    </TouchableOpacity>
  )
}
