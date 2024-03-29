import { Image, View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { router } from 'expo-router' 

import { theme } from '@/theme'

import { WelcomeButton } from '@/components/button/welcome_button'
import normalize from 'react-native-normalize';

export default function Home() {
  const { fontScale } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <View style={{
        width: '100%',    
        marginTop: normalize(45, 'height') * fontScale,
      }}>
        <Image style={{
          width: normalize(675),
          height: normalize(635),
          right: '-90%',
          top: normalize(-400),
          marginTop: normalize(20) / fontScale,
          position: 'absolute',
        }} source={require("@/assets/images/eclipse.png")}
        />
        <Image style={{
          width: '100%',
          height: normalize(325),
          alignSelf: "center",
        }} source={require("@/assets/images/logo.png")}
        />
      </View>
      <View style={{
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'center',   
        marginBottom: normalize(20) / fontScale,       
      }}>
        <Text style={{
          width: '100%',
          fontSize: 35 * fontScale + normalize(1),
          // paddingTop: normalize(20,'height') * fontScale,
          // paddingBottom: normalize(10),
        }} className="text-primary text-center font-poppins-semibold">
          Discover Your {"\n"} Dream Job here
        </Text>  
        <Text style={{
          width: '100%',
          fontSize: 14 * fontScale + normalize(1),
        }} className="text-black text-center font-poppins-regular">
          Explore all the existing job roles based on your {"\n"} interest and study major
        </Text> 
        <Image style={{
          width: '100%',
          height: normalize(378),
          left: '-62%',
          top: normalize(90) / fontScale,
          position: 'absolute',
        }} source={require("@/assets/images/union.png")}
        />          
      </View>   
      <View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',    
      }} className='flex-row bottom-6'> 
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
    // justifyContent: 'space-between',    
    alignItems: "center",    
  }, 
});
