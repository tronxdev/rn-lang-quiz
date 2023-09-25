import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface OptionProps {
  item: string;
  setSelectedAnswer: (newSelectedAnswer: string) => void;
}

const Option = ({ item, setSelectedAnswer }: OptionProps) => {
  const handlePress = () => {
    setSelectedAnswer(item);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.radioButton}>
      <Text style={styles.radioButtonLabel}>{item}</Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    width: "auto",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#e2e8f0",
  },

  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00bcd4", // Selected circle color
  },
  radioButtonLabel: {
    fontSize: 16,
  },
});
