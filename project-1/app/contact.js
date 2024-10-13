import { View, Text, Linking, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const ContactUs = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-2xl font-bold mb-4 text-white">Get in Touch</Text>
      <Text className="text-lg mb-2 text-white">Contact us for any questions or feedback</Text>
      <Text className="text-lg mb-4 text-white">
        Email: <Text style={{ color: 'lightblue' }} onPress={() => Linking.openURL('mailto:example@example.com')}>example@example.com</Text>
      </Text>
      <Text className="text-lg mb-4 text-white">Phone: 123-456-7890</Text>
      <Button title="Back" onPress={() => { router.back() }} color="#4c669f" />
    </LinearGradient>
  )
}

export default ContactUs
