import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductCard = ({ product }) => (
    <View className="bg-white rounded-lg p-4 mb-4 shadow min-w-full">
        <Text className="text-lg font-bold">{product.title}</Text>
        <Text className="text-green-500">${product.price}</Text>
        {product.image && (
                <Image source={{ uri: product.image }} className="w-full h-64 object-cover rounded-lg" />
            )}
        {/* <Text className="text-gray-700">{product.description}</Text> */}
    </View>
);

export default ProductCard
