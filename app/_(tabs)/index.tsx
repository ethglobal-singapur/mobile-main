import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

<<<<<<< Updated upstream:app/(tabs)/index.tsx
const logo_area = StyleSheet.create({
  logoContainer: {
    padding: 40, // Daha fazla padding ekledik
    borderRadius: 15, // Yuvarlatılmış köşeler için radiusu arttırdık
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Logoyu daha yuvarlatmak için border radius ekledik
  },
});

const button_area = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 50, // Daha yuvarlatılmış köşeler
    width: 300,
    position: 'absolute', // Butonu sabitliyoruz
    bottom: 50, // Butonu sayfanın altına daha yakın yerleştiriyoruz
    alignSelf: 'center', // Butonu yatayda ortalıyoruz
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={logo_area.logoContainer}>
          <Image
            source={require('@/assets/images/example.png')} // Logo PNG dosyanızın yolu
            style={logo_area.logoImage}
          />
        </View>
      </View>
      <TouchableOpacity style={button_area.button}>
        <Text style={{ color: "white" }}>Verify With WorldID</Text>
      </TouchableOpacity>
=======
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-blue-300 justify-center items-center">
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Verify With WorldID</Text>
        </TouchableOpacity>
      </View>
>>>>>>> Stashed changes:app/_(tabs)/index.tsx
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFDD0", // Arka plan rengini krem rengi yaptık
  },
});
