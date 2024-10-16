import { Pressable } from 'react-native';



import { FontAwesome } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

export default function _layout() {
  

  return (
    <Tabs
      screenOptions={{
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                   
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
        
        }}
      />

      <Tabs.Screen
        name="modal"
        options={{
          title: 'Modal',
        
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
