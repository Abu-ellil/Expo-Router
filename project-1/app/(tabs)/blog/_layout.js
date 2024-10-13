import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{tabBarIcon: () => <Feather name="shopping-bag" size={24} color="black" />, title: 'Shop',headerRight:()=><Pressable className="p-2 m-2 bg-purple-500 rounded-md" title='Blog' onPress={()=>{
            router.push('/')}}><Text className="text-white">Home</Text></Pressable>}}
      />
      {/* <Stack.Screen
        name="index"
        options={{headerShown: false }}
      /> */}
    </Stack>
  )
}
