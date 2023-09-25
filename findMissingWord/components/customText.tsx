import { Text } from "react-native";
import React from "react";

const CustomText = ({ children, style }: any) => (
  <Text style={style}>{children}</Text>
);

export default CustomText;
