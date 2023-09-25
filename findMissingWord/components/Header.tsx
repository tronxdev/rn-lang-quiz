import { View, StyleSheet, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  logo: {
    width: "auto",
    height: 100,
  },
});
