import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ActivityIndicator size="large" color="#ffff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#315f72",
  },
  text: {
    color: "#ffff",
  },
  logo: {
    width: "auto",
    height: 100,
  },
});

export default Loading;
