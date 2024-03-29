import { View, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

import normalize from 'react-native-normalize';

import { Ionicons, MaterialIcons } from "@expo/vector-icons";


type SocialButtonProps = TouchableOpacityProps & {
  icon?: string
}
export function SocialButton({ 
    icon,
    ...rest 
}: SocialButtonProps ){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ 
          width: normalize(64),
          height: normalize(48),
          backgroundColor: "#ECECEC",
          margin: normalize(6),
        }} className="justify-center items-center rounded-xl" 
        {...rest}>  
        <Ionicons name="logo-google" size={normalize(22)} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={{ 
          width: normalize(64),
          height: normalize(48),
          backgroundColor: "#ECECEC",
          margin: normalize(6),
        }} className="justify-center items-center rounded-xl" 
        {...rest}>  
        <Ionicons name="logo-facebook" size={normalize(22)} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={{ 
          width: normalize(64),
          height: normalize(48),
          backgroundColor: "#ECECEC",
          margin: normalize(6),
        }} className="justify-center items-center rounded-xl" 
        {...rest}>  
        <Ionicons name="logo-apple" size={normalize(22)} color="#000" />
      </TouchableOpacity>      
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

  }
})