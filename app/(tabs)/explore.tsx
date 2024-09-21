import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState } from 'react';

const logo_area = StyleSheet.create({
  logo: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});

const visitedCountries = [
  "Türkiye",
  "Fransa",
  "İspanya",
  "Almanya",
  "İtalya",
];

export default function TabTwoScreen() {
  const [showCountries, setShowCountries] = useState(false);

  const handlePress = () => {
    setShowCountries(!showCountries);
  };

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <View className="flex-row justify-between items-center px-4 py-2 bg-gray-100">
        <View style={logo_area.logo}>
          <Text style={{ color: "white" }}>LOGO</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-lg font-semibold text-blue-600">Menu</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>S: Search & D: Filter Less - More</Text>
      </TouchableOpacity>

      {showCountries && (
        <View style={styles.countryList}>
          {visitedCountries.map((country, index) => (
            <Text key={index} style={styles.countryItem}>{country}</Text>
          ))}
        </View>
      )}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  countryList: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  countryItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
