import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View,Text,StyleSheet } from 'react-native'

export default function Lab05() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View >
            <Text style={styles.title}>The Word's Best Bike</Text>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
    }

})
