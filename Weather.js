import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#F0F2F0", "#000C40"],
  },
  Drizzle: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#3a7bd5", "#3a6073"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#274046", "#E6DADA"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Smoke: {
    iconName: "weather-cloudy",
    gradient: ["#485563", "#29323c"],
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#215f00", "#e4e4d9"],
  },

  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#16222A", "#3A6073"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#403B4A", "#E7E9BB"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#3C3B3F", "#605C3C"],
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#636363", "#a2ab58"],
  },
  Ash: {
    iconName: "weather-partly-cloudy",
    gradient: ["#606c88", "#3f4c6b"],
  },
  Squall: {
    iconName: "weather-partly-cloudy",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#000000", "#e74c3c"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f12711", "#f5af19"],
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
      <View style={styles.halfContainer} />
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
});
