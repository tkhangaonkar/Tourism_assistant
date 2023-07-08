import React from "react";
import { View } from "react-native";
import Styles from "./Styles";

export default function Card({ children }) {
  return <View style={Styles.cardContainer}>{children}</View>;
}
