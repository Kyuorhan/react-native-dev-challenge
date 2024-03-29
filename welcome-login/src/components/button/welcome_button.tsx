import { 
  Text, 
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
    <TouchableOpacity  
        className="justify-center items-center rounded-lg
        " {...rest}>
      <Text style={{ 
        width: normalize(150),
        height: normalize(50,'height'),
        backgroundColor: backgroundColors,
        textAlign: "center",
        textAlignVertical: "center",
        color: titleColors,
        fontSize: 20 * fontScale,
        borderRadius: normalize(12),
      }} className=" font-poppins-semibold ">
        {title}
      </Text>      
    </TouchableOpacity>
  )
}