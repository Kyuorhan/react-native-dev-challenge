import { SafeAreaView } from 'react-native'
import { Slot } from 'expo-router'

import {
    useFonts,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular
} from '@expo-google-fonts/poppins'

import { Loading } from '@/components/loading'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_600SemiBold,
        Poppins_500Medium,
        Poppins_400Regular,
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return fontsLoaded ? (
        <Slot /> 
    ) : null



}