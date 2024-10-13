import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function cart() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center p-5 bg-gray-100">
    <View className="flex-1 justify-center items-center p-5 bg-gray-100">
      
      <Text className="text-2xl font-bold text-gray-800">Your Cart</Text>
      <View className="mt-4">
        <Text className="text-lg text-gray-700">You have no items in your cart.</Text>
        <Text className="text-lg text-gray-700">Start shopping to add items to your cart.</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}
