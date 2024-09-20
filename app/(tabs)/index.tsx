import {
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";

const logo_area = StyleSheet.create({
  logo: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
});

const button_area = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
});
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-orange-100 justify-center items-center">
      <View style={logo_area.logo}>
          <Text style={{ color: "white" }}>LOGO</Text>
        </View>
      </View>
      <View className="flex-1 bg-blue-300 justify-center items-center">
      <TouchableOpacity style={button_area.button}>
          <Text style={{ color: "white" }}>Verify With WorldID</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
