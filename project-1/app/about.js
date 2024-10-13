import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

export default function About() {
    const router = useRouter()
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Gradient colors
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} // Full screen gradient
    >
      <Text className="text-2xl font-bold mb-4 text-white">About This App</Text>
      <Text className="text-lg mb-2 text-white">This app is designed to help users manage their tasks efficiently.</Text>
      <Text className="text-lg mb-2 text-white">Our goal is to provide a simple and intuitive interface for task management.</Text>
      <Text className="text-lg mb-4 text-white">Thank you for using our app!</Text>
      <Button title="Back" onPress={() => { router.back() }} color="#4c669f" />
    </LinearGradient>
  )
}
