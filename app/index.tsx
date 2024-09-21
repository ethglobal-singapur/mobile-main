import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="py-4 px-6 flex-1">
      <View className="items-center py-6">
        <Image
          style={{
            width: "60%",
            aspectRatio: 1,
          }}
          source={require("@/assets/images/logo.png")}
        />
      </View>

      <View className="flex-1 items-center justify-center">
        <TouchableOpacity
          onPress={() => {
            router.push("/scan");
          }}
          className="bg-primary p-2 mx-auto px-4 rounded-xl"
          style={{
            elevation: 20,
            shadowRadius: 12,
            shadowColor: "#5E727B",
            shadowOffset: { width: 12, height: 12 },
            shadowOpacity: 1,
          }}
        >
          <Text className="text-center mx-auto text-xl font-bold text-white px-8 py-2">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
