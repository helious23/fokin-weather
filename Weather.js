import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000C40", "#F0F2F0"],
    title: "Thunderstorm",
    subtitle: "Don't go outside",
  },
  Drizzle: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Drizzle",
    subtitle: "Like a shower",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Rain",
    subtitle: "Like cats and dogs",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#274046", "#E6DADA"],
    title: "Snow",
    subtitle: "It's time to go outside!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Mist",
    subtitle: "Be careful Driving",
  },
  Smoke: {
    iconName: "weather-cloudy",
    gradient: ["#485563", "#29323c"],
    title: "Smoke",
    subtitle: "Not good for walking",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#215f00", "#e4e4d9"],
    title: "Hazy",
    subtitle: "What a hazy day",
  },

  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#16222A", "#3A6073"],
    title: "Clouds",
    subtitle: "Groomy cloudy",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Dust",
    subtitle: "Don't go outside",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "Fog",
    subtitle: "Mistery Foggy day",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#636363", "#a2ab58"],
    title: "Sand",
    subtitle: "Sand Storm is here",
  },
  Ash: {
    iconName: "weather-partly-cloudy",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ash",
    subtitle: "Not good for walking",
  },
  Squall: {
    iconName: "weather-partly-windy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Windy",
    subtitle: "Don't fly away",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#e74c3c"],
    title: "Tornado",
    subtitle: "Hold tight and Be careful",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2193b0", "#6dd5ed"],
    title: "Sunny",
    subtitle: "Time to go outside",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTyles = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
