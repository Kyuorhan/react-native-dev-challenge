import { 
  Image, 
  Text, 
  TextProps, 
  View, 
  StyleSheet, 
} from 'react-native'

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
  return (
    <View style={styles.container}>
      <Image style={styles.containerEclipse}          
          source={require("@/assets/images/eclipse.png")}
      />
      <View style={styles.textContainer}>
        <Text className='text-primary text-center text-3xl font-poppins-bold pt-5 pb-1'>
          {title}
        </Text>  
        <Text {...subTitleProps}>
          {subTitle}
        </Text>    
      </View>   
      {/* <View style={styles.buttomContainer}>
        <TouchableOpacity style={{ 
            width: normalize(64),
            height: normalize(48),     
            // backgroundColor: "#1F41BB",
            margin: normalize(6),
          }} className="justify-center items-center rounded-xl">  
          <MaterialIcons name="arrow-back" size={32} color="#000" />
        </TouchableOpacity>  
      </View>       */}
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
  // buttomContainer: {
  //   left: '1.5%',
  //   // top: '10%', 
  //   position: 'absolute',
  // },
  containerEclipse: {
    width: normalize(650),
    height: normalize(611),
    right: '-78%',
    top: normalize(-320),
    position: 'absolute',
  },     
  textContainer: {
    width: normalize(320),
    marginTop: '20%',
  }, 
});