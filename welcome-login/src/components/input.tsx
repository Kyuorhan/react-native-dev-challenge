import { 
  View, 
  TextInput, 
  TextInputProps, 
  StyleSheet,
  useWindowDimensions,  
} from "react-native";
import { useState } from "react";
import normalize from "react-native-normalize";

import { fonts } from "@/theme/fonts";

type InputProps = TextInputProps & {
  placeholder?: string
  value?: string
  onChangeText?: string
  backgroundColors?: string
}

export function Input({
  placeholder, 
  value,
  onChangeText,
  ...rest 
}: InputProps ) {
  const [isFocused, setFocus] = useState(false);  
  const { fontScale } = useWindowDimensions();

  const inputFocused = {
    input: {
      width: normalize(280),
      height: normalize(56),
      borderRadius: normalize(10),
      paddingVertical: normalize(10),
      paddingHorizontal: normalize(20),
      fontFamily: fonts.family.medium,
      fontSize: fonts.size.body.sm * fontScale + normalize(1),
      backgroundColor: '#F1F4FF',
    },
    inputFocus: {
      width: normalize(280),
      height: normalize(56),
      borderColor: '#1F41BB', 
      borderWidth: 2,
      borderRadius: normalize(10),
      paddingVertical: normalize(10),
      paddingHorizontal: normalize(20),
      fontFamily: fonts.family.medium,
      fontSize: fonts.size.body.sm * fontScale + normalize(1),
      backgroundColor: '#F1F4FF', 
    }, 
  }

  return (
    <View style={styles.container}>      
      <TextInput 
        style={isFocused ? inputFocused.inputFocus : inputFocused.input}
        placeholder={placeholder} 
        placeholderTextColor={'#626262'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)} 
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: normalize(12),     
  },     
})