import { 
  Image, 
  Text, 
  TextProps, 
  ScrollView,
  View, 
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions, 
} from 'react-native'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';

import normalize from 'react-native-normalize';

type HeaderProps = TextProps & {
  title: string
  subTitle?: string
  subTitleStyle?: String
}

export function Header({
  title, 
  subTitle, 
  ...subTitleProps 
}: HeaderProps ) {
  const { fontScale } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image style={styles.eclipseContainer}          
          source={require("@/assets/images/eclipse.png")}
      />
      <View style={styles.textContainer}>
        <Text style={{
          fontSize: 30 * fontScale + normalize(1),
          paddingTop: normalize(10, 'height'),
          paddingBottom: normalize(10),
        }} className='text-primary text-center text-3xl font-poppins-bold'>
          {title}
        </Text>  
        <Text {...subTitleProps}>
          {subTitle}
        </Text>    
      </View>   
      <View style={styles.buttomContainer}>
        <TouchableOpacity style={{ 
            width: normalize(64),
            height: normalize(48, 'height'),     
            // backgroundColor: "#1F41BB",
            margin: normalize(6),
          }} className="justify-center items-center rounded-xl"
          onPress={() => router.back()}>  
          <MaterialIcons name="arrow-back" size={normalize(28)} color="#000" />
        </TouchableOpacity>  
      </View>      
    </View>
  )  
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: "center",
    // backgroundColor: "#1F41BB",
  },
  eclipseContainer: {
    width: normalize(650),
    height: normalize(611),
    right: '-78%',
    top: normalize(-320),
    position: 'absolute',
  },    
  buttomContainer: {
    left: '1.5%',
    top: '20%', 
    position: 'absolute',
  },   
  textContainer: {
    width: normalize(320),
    marginTop: '20%',
  }, 
});