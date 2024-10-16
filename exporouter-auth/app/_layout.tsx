import { AuthProvider } from "@/context/auth";
import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayoutNav() {
  return (
    <AuthProvider >

    <SafeAreaView className="flex-1">
      <Slot />
    </SafeAreaView>
    </AuthProvider>
  );
}
