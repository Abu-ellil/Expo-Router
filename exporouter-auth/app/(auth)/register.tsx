import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4" >
      <Text>register Page</Text>
      <Link href={"/(auth)/login"} className="p-4 bg-emerald-700 text-white text-lg">
        Log In
      </Link>
      <Link href={"/(auth)/forgetPassword"} className="p-4 bg-emerald-700 text-white text-lg">
        Forget Password
      </Link>
    </View>
  )
}

export default register
