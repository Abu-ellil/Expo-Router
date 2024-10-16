import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/context/auth";
import { Link } from "expo-router";

const login = () => {
  const { signIn } = useAuth();
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Pressable onPress={signIn} className="p-4 bg-emerald-700 ">
        <Text className=" text-white text-lg">Login</Text>
      </Pressable>
      <Link href={"/(auth)/register"} className="p-4 bg-emerald-700 text-white text-lg">
        Regester
      </Link>
    </View>
  );
};

export default login;
