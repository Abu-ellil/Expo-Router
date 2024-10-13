import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="blog"
        options={{title:"Shop",headerShown: false, tabBarIcon: () => <Feather name="shopping-bag" size={24} color="black" />,}}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: () => <Feather name="user" size={24} color="black" />,title: 'Profile',headerShown: false }}

      />
      <Tabs.Screen
        name="cart"
        options={{ tabBarIcon: () => <Feather name="shopping-cart" size={24} color="black" />,title: 'Cart',headerShown: false }}

      />
    </Tabs>
  )
}

export default _layout
