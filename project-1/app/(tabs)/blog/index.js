import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import ProductCard from '../../../components/ProductCard'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const BlogPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error(error)); // Handle errors
    }, [])

    const handlePress = (product) => {
        router.push({
            pathname: `/blog/${product.id}`,
            params: {
                title: product.title,
                price: product.price,
                description: product.description,
                imgUri: product.image
            },
        });
    };

    return (
        <SafeAreaView className="flex-1">

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} className="flex-1">
            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                {products?.map(product => (
                    <Pressable key={product.id} onPress={() => handlePress(product)} className="m-4">
                        <ProductCard product={product} />
                    </Pressable>
                ))}
            </ScrollView>
        </LinearGradient>
                </SafeAreaView>
    )
}

export default BlogPage
