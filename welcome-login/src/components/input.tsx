import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
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
  
  return (
    <View style={styles.container}>
      
      <TextInput 
        style={isFocused ? styles.inputFocus : styles.input}
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
    // justifyContent: "center",
    // alignItems: "center",
  },    
  input: {
    width: normalize(300),
    height: normalize(56),
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    fontFamily: fonts.family.medium,
    fontSize:normalize(fonts.size.body.md),
    backgroundColor: '#F1F4FF',
  },
  inputFocus: {
    width: normalize(300),
    height: normalize(56),
    borderColor: '#1F41BB', 
    borderWidth: 2,
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    fontFamily: fonts.family.medium,
    fontSize:normalize(fonts.size.body.md),
    backgroundColor: '#F1F4FF', 
  },  
})