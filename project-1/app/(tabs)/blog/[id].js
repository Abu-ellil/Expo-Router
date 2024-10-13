import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Post = () => {
    const { title, price, description, imgUri } = useLocalSearchParams(); // Ensure imgUri is retrieved

    return (
        <>
        <Stack.Screen options={{ title: title }} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="p-4 flex-1 justify-between">
            <Text className="text-2xl font-bold">{title}</Text>
            <Text className="text-lg text-green-500">${price}</Text>
            <Text className="text-gray-700">{description}</Text>
            {imgUri && (
                <Image source={{ uri: imgUri }} className="w-full h-64 object-cover rounded-lg" />
            )}
        <Pressable onPress={() => console.log('Add to cart functionality not implemented yet')}>
            <Text className="text-white bg-blue-500 p-2 rounded">Add to Cart</Text>
        </Pressable>
        </View>
        </ScrollView>
            </>
    )
}

export default Post
