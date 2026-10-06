import React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import { View,Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import axios from 'axios'
import { FlatList } from 'react-native'
type Bycle = {
  id: number;
  title: string;
  desctipt: string;
  avatar: string;

}

export default function App() {
  const [bycles, setBycles] = useState<Bycle[]>([])
const [loading, setLoading] = useState<boolean>(true)
useEffect(()=>{
  async function fetchAxiosData(){
    try{
      const response = await axios.get('https://6ac4961c54a61668c5f5cb5e.mockapi.io/bycle')
      setBycles(response.data)
      console.log(response.data)
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }
  fetchAxiosData();
},[])
if (loading) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Đang tải danh sách xe đạp...</Text>
    </View>
  )
}
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
    <View>

      <Text style={styles.title}>
      
          <FlatList
          data={bycles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.desctipt}</Text>
              <Image source={{ uri: item.avatar }} style={{ width: 100, height: 100 }} />
            </View>
          )}
  />
      </Text>
    </View>

      </SafeAreaView>

    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,

},
title: {
  fontStyle: 'italic',
  fontSize: 30,
}

})