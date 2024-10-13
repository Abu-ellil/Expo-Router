import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center p-5 bg-gray-100">
<Image
        source={{
          uri: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        }}
        className="w-20 h-20 rounded-full bg-cover"
      />


      <Text className="text-lg text-gray-800">Name: Abc Def</Text>
      <Text className="text-lg text-gray-800">Email: aaaaa@example.com</Text>
    </SafeAreaView>
  )
}

export default profile
