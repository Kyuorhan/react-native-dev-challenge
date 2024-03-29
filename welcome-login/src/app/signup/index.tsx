import { 
  Image, 
  View, 
  ScrollView,
  Text, 
  StyleSheet, 
  useWindowDimensions 

} from "react-native"

import normalize from "react-native-normalize";

import { theme } from "@/theme"; 
import { Header } from "@/components/header"; 
import { Input } from "@/components/input";
import { SignButton } from "@/components/button/sign_button";
import { SocialButton } from "@/components/button/social_button";

export default function SingUp() {
  const { fontScale } = useWindowDimensions();

  return ( 
    <ScrollView style={{ flex:1 }}>
      <View style={styles.container}>
        <Header
          title="Create Account"
          subTitle={"Create an account so you can explore all the \n existing jobs"}
          style={{          
            fontSize: 14 * fontScale + normalize(1),
            marginTop: normalize(8, 'height'),
          }} className="text-black font-poppins-medium text-center"
        /> 
        <Image style={styles.imageContainer}          
            source={require("@/assets/images/union.png")}
        />         
        <View style={styles.inputContainer}>
          <Input placeholder="Email"/>   
          <Input placeholder="Password"/> 
          <Input placeholder="Confirm Password"/>  
        </View>    
        <SignButton 
          title="Sign Up" 
          titleColors={theme.colors.white}  
          // onPress={() => router.navigate('/signin/')}     
        />     
        <Text style={{
          color: '#422949',
          fontSize: 14 * fontScale + normalize(1),
          paddingTop: normalize(20, 'height'),
        }} className="font-poppins-semibold">
          Already have an account
        </Text> 
        <View style={styles.socialContainer}>
          <Text style={{
            fontSize: 14 * fontScale + normalize(1),
            marginBottom: normalize(8),
          }} className="text-primary font-poppins-semibold">
            Or continue with
          </Text> 
          <SocialButton />
        </View>                        
      </View>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',       
    alignItems: "center", 
    // backgroundColor:"plum",  
    paddingBottom: '15%'
  },  
  inputContainer: {
    paddingTop: normalize(20, 'height'), 
    paddingBottom: normalize(20),  
    alignItems: "flex-end",
  },
  socialContainer: {
    paddingTop: normalize(60, 'height'),
    alignItems: "center",
  },
  imageContainer: {
    width: '100%',
    height: '40%', 
    left: '-70%',
    // top: '-3.5%',
    bottom: '-8.5%',  
    position: 'absolute',
  },    
})  