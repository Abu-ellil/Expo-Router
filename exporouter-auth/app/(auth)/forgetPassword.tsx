import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const forgetPassword = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>forgetPassword</Text>
      <Link href={"/(auth)/login"} className="p-4 bg-emerald-700 text-white text-lg">
       Back to Log In
      </Link>
    </View>
  )
}

export default forgetPassword
