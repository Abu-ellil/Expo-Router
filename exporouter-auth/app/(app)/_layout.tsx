import { Stack } from 'expo-router'

const _layout = () => {
  return (
    
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    
  )
}

export default _layout
