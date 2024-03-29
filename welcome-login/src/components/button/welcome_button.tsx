import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import normalize from 'react-native-normalize';

type WelcomeProps = TouchableOpacityProps & {
  title: string
  titleColors: string
  backgroundColors?: string
}

export function WelcomeButton({ 
    title, 
    titleColors, 
    backgroundColors = '#FFFFFF',  
    ...rest 
}: WelcomeProps ){
  return (
    <TouchableOpacity className="w-40 h-14 justify-center items-center rounded-lg
        " {...rest}>
      <Text style={{ 
        // width: normalize(160),
        // height: normalize(56),
        backgroundColor: backgroundColors,
        textAlign: "center",
        textAlignVertical: "center",
        color: titleColors,
      }} className="w-40 h-14 text-lg font-poppins-semibold rounded-lg">
        {title}
      </Text>      
    </TouchableOpacity>
  )
}