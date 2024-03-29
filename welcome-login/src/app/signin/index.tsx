import { 
  Image, 
  ImageBackground,
  View, 
  Text, 
  StyleSheet
} from "react-native"

import { Header } from "@/components/header"; 
import { Input } from "@/components/input";
import normalize from "react-native-normalize";
import { SignButton } from "@/components/button/sign_button";
import { theme } from "@/theme";
import { SocialButton } from "@/components/button/social_button";

export default function SingIn() {
  return ( 
    <View style={styles.container}>
      <Header
        title="Login here"
        subTitle={"Welcome back you’ve \n been missed!"}
          className="text-black text-xl font-poppins-semibold text-center mt-8"
      /> 
      <View style={styles.inputContainer}>
        <Input placeholder="Email"/>   
        <Input placeholder="Password"/> 
        <Text style={styles.forgotUserContainer}   
            className="text-primary text-sm font-poppins-semibold">
          Forgot your password?
        </Text>   
      </View>  
      <Image style={styles.imageContainer}          
          source={require("@/assets/images/union.png")}
          // resizeMode="contain"
      />
      <SignButton 
        title="Sign In" 
        titleColors={theme.colors.white}  
        // onPress={() => router.navigate('/signin/')}     
      />
      <Text style={styles.createUserContainer}  
        className="text-sm font-poppins-semibold">
        Create new account
      </Text>     
      <View style={styles.socialContainer}>
        <Text className="text-primary text-sm font-poppins-semibold mb-3">
          Or continue with
        </Text> 
        <SocialButton icon="google"/>
      </View>      
     
    </View>  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',       
    alignItems: "center", 
    // justifyContent: 'space-between',  
    // backgroundColor:"plum",  
  },  
  inputContainer: {
    paddingTop: normalize(48), 
    alignItems: "flex-end",
  },
  forgotUserContainer: {
    padding: normalize(20), 
  },
  createUserContainer: {
    color: '#422949',
    paddingTop: normalize(20),
  },
  socialContainer: {
    paddingTop: normalize(50),
    alignItems: "center",
    // position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: '40%', 
    left: '-70%',
    bottom: '-8.5%',  
    position: 'absolute', 
  },    
})  