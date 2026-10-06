import React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View, ScrollView, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'

type Bycle = {
  id: number;
  title: string;
  email: string;
  avatar: string;
}

export default function Bai6() {
  const [bycles, setBycles] = useState<Bycle[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchAxiosData() {
      try {
        const response = await axios.get('https://6ac4961c54a61668c5f5cb5e.mockapi.io/bycle')
        setBycles(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchAxiosData()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>


          <Text style={styles.sectionTitle}>1. Horizontal List (Cuộn Ngang)</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', padding: 10 }}>
            {bycles.map((item) => (
              <View key={'horiz-' + item.id} style={styles.horizontalBox}>
                <Image source={{ uri: item.avatar }} style={styles.imageHorizontal} />
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>



          <Text style={styles.sectionTitle}>2. GridView (Hiển thị 2 Cột)</Text>
          <View style={styles.gridContainer}>
            {bycles.map((item) => (
              <View key={'grid-' + item.id} style={styles.gridBox}>
                <Image source={{ uri: item.avatar }} style={styles.imageGrid} />
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 11, color: 'gray' }}>{item.email}</Text>
              </View>
            ))}
          </View>


          <Text style={styles.sectionTitle}>3. ListView (Hiển thị 1 Cột)</Text>
          <View style={{ padding: 10 }}>
            {bycles.map((item) => (
              <View key={'list-' + item.id} style={styles.listBox}>
                <Image source={{ uri: item.avatar }} style={styles.imageVertical} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    padding: 8,
    marginVertical: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },


  horizontalBox: {
    marginRight: 15,
    alignItems: 'center',
    width: 90,
  },
  imageHorizontal: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  gridBox: {
    width: '46%', 
    margin: '2%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  imageGrid: {
    width: 100,
    height: 100,
  },


  listBox: {
    flexDirection: 'row', 
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  imageVertical: {
    width: 70,
    height: 70,
    borderRadius: 35, 
  },
})
