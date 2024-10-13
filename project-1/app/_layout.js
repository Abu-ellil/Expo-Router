import { View, Text, Button } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

const Root = () => {
  return (
  <Stack screenOptions={{headerStyle:{backgroundColor:"white"},headerTintColor:"black"}}>
    <Stack.Screen
    name='index' options={{headerTitle:"Home",headerTitleAlign:"center",title:"Home"}}
    />
    <Stack.Screen
    name='about' options={{headerTitle:"About",headerTitleAlign:"center",title:"About"}}
    />
    <Stack.Screen
    name='contact' options={{headerTitle:"Contact Us",headerTitleAlign:"center",title:"About",presentation:"modal"}}
    />
    <Stack.Screen
    name='(tabs)' options={{headerShown:false}}
    />

  </Stack>
)
}

export default Root
