import { 
  Text, 
  View,
  TouchableOpacity, 
  TouchableOpacityProps,
  useWindowDimensions
} from "react-native";

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
  const { fontScale } = useWindowDimensions();

  return (
    // <View>
      <TouchableOpacity  
          className="justify-center items-center rounded-lg
          " {...rest}>
        <Text style={{ 
          width: normalize(148),
          height: normalize(56),
          backgroundColor: backgroundColors,
          textAlign: "center",
          textAlignVertical: "center",
          color: titleColors,
          fontSize: 18 * fontScale + normalize(1),
          borderRadius: normalize(12),
        }} className=" font-poppins-semibold ">
          {title}
        </Text>      
      </TouchableOpacity>
    // </View>
  )
}