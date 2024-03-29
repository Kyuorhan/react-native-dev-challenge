import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, useWindowDimensions } from "react-native";

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
  const { fontScale } = useWindowDimensions();

  return (
    <TouchableOpacity style={{ 
        width: normalize(300) ,
        height: normalize(50, 'height'),
        backgroundColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: normalize(0.8),
        shadowRadius: normalize(10),
        elevation: normalize(8),
        margin: normalize(15),
        borderRadius: normalize(10),
      }} className="justify-center items-center" 
      {...rest}>
      <Text style={{ 
        width: normalize(300),
        color: titleColors,    
        fontSize: 18 * fontScale,       
      }} className="font-poppins-semibold text-center">
        {title}
      </Text>      
    </TouchableOpacity>
  )
}
