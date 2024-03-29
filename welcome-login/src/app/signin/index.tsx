import { 
  Image, 
  ScrollView,
  View, 
  Text, 
  StyleSheet,
  useWindowDimensions
} from "react-native"

import { Header } from "@/components/header"; 
import { Input } from "@/components/input";
import normalize from "react-native-normalize";
import { SignButton } from "@/components/button/sign_button";
import { theme } from "@/theme";
import { SocialButton } from "@/components/button/social_button";


export default function SingIn() {
  const { fontScale } = useWindowDimensions();

  return ( 
    <ScrollView  style={{ flex:1 }}>
      <View style={styles.container}>    
        <Header
          title="Login here"
          subTitle={"Welcome back you’ve \n been missed!"} 
          style={{          
            fontSize: 20 * fontScale + normalize(1),
            marginTop: normalize(32),
          }} className="text-black font-poppins-semibold text-center"
        /> 
        <Image style={styles.imageContainer}          
            source={require("@/assets/images/union.png")}
        />      
        <View style={styles.inputContainer}>
          <Input placeholder="Email"/>   
          <Input placeholder="Password"/> 
          <Text style={{
            padding: normalize(20), 
            fontSize: 14 * fontScale + normalize(1),
          }} className="text-primary font-poppins-semibold">
            Forgot your password?
          </Text>   
        </View>  
        <SignButton 
          title="Sign In" 
          titleColors={theme.colors.white}  
          // onPress={() => router.navigate('/signin/')}     
        />
        <Text style={{
          color: '#422949',
          fontSize: 14 * fontScale + normalize(1),
          paddingTop: normalize(20, 'height'),
        }} className="font-poppins-semibold">
          Create new account
        </Text>     
        <View style={styles.socialContainer}>
          <Text style={{
            fontSize: 14 * fontScale + normalize(1),
            marginBottom: normalize(8),
          }} className="text-primary font-poppins-semibold">
            Or continue with
          </Text> 
          <SocialButton icon="google"/>
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
    paddingBottom: '15%'
    // backgroundColor:"plum",  
  },  
  inputContainer: {
    paddingTop: normalize(20, 'height'), 
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
    bottom: '-8.5%',  
    position: 'absolute', 
  },    
})  