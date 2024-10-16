import { useAuth } from "@/context/auth";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function TabOneScreen() {
  const {signOut} = useAuth()
  return (
    <View className="flex-1 items-center justify-center bg-sky-300">
      <Pressable onPress={signOut} className="p-4 bg-emerald-700 ">
        <Text className="text-white text-lg">
          LogOut
        </Text>
      </Pressable>
    
  </View>
  );
}

