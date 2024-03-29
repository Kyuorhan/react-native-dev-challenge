import { Image, View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { Link, router } from 'expo-router' 

import { theme } from '@/theme'

import { WelcomeButton } from '@/components/button/welcome_button'
import normalize from 'react-native-normalize';

export default function Home() {
  const { fontScale } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <Image style={styles.eclipseContainer}          
        source={require("@/assets/images/eclipse.png")}
      >
      </Image>            
      <Image style={styles.logoContainer}
        source={require("@/assets/images/logo.png")}
      />
      <Text style={styles.title} 
          className="text-primary text-center text-3xl font-poppins-semibold pt-5 pb-5">
        Discover Your {"\n"} Dream Job here
      </Text>  
      <Text style={{
        maxWidth: normalize(300),
        alignSelf: "center",
        fontSize: 14 * fontScale,
      }} className="text-black font-poppins-regular text-center">
        Explore all the existing job roles based on your {"\n"} interest and study major
      </Text> 
      <Image style={styles.unionContainer}          
        source={require("@/assets/images/union.png")}>
      </Image>     
      <View style={
        styles.buttonContainer
      } className='flex-row bottom-6'>
        <WelcomeButton style={{
              shadowColor: theme.colors.primary,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: normalize(10),
              elevation: normalize(8),
          }} className='mx-2.5'           
          title="Login" 
          titleColors={theme.colors.white}  
          backgroundColors={theme.colors.primary} 
          onPress={() => router.navigate('/signin/')}     
        />
        <WelcomeButton className='mx-2.5'       
          title="Register" 
          titleColors={theme.colors.input}  
          onPress={() => router.navigate('/signup/')}        
        />   
      </View>   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '10%',
    justifyContent: 'space-between',    
    alignItems: "center",
  },
  logoContainer: {  
    maxWidth: normalize(350),
    maxHeight: normalize(420),
    // width: '100%',
    height: normalize(345, 'height'), 
    alignSelf: "center",
  },
  eclipseContainer: {
    width: normalize(650),
    height: normalize(611),
    // right: '-85%',
    right: '-86%',
    top: '-39.5%',
   position: 'absolute',
  },    
  unionContainer: {
    width: '100%',
    height: '40%', 
    left: '-60%',
    top: '-1.5%',
  },  
  title: {     
    width: '100%',
    maxWidth: normalize(320),
    justifyContent: "center",
    marginBottom: normalize(10),
  },  
  // backgroundColor: '#1F41BB'
  buttonContainer: {
    position: 'absolute',
    bottom: normalize(105, 'height'),
    justifyContent: 'center',    
    width: '100%',
  },
});
