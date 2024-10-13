import { View, Text, Button, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
// import "../glopal.css"
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'



export default function Index() {
  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text className="text-2xl font-bold mb-4 text-white">Welcome to the App</Text>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg mb-2 text-white">Start Shopping Here</Text>
          <Link href="/(tabs)/blog/" asChild>
          <TouchableOpacity className="bg-red-400 p-4 rounded justify-center items-center">
          <Feather name="shopping-cart" size={32} color="white" />
            <Text className="text-white">Products Page</Text>
          </TouchableOpacity>
        </Link>
          <StatusBar style="auto" />
        </View>
        <View className="flex-1 flex-row items-center justify-center  gap-4">

        <Link href="/about" asChild>
          <TouchableOpacity className="bg-red-400 p-2 rounded">
            <Text className="text-white">About Page</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/contact" asChild>
          <TouchableOpacity className="bg-red-400 p-2 rounded">
            <Text className="text-white">Contact Page</Text>
          </TouchableOpacity>
        </Link>

        </View>
      </ScrollView>
    </LinearGradient>
  )
}
