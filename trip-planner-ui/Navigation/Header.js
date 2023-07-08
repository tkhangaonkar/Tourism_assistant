import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withGlobalContext } from "../Context";
import Styles from "./Styles";

function Header(props) {
  const { currentScreen, scene } = props;
  const {
    descriptor: { navigation },
  } = scene;

  return (
    <View style={Styles.headerContainer}>
      <View style={Styles.headerMenuContainer}>
        <Ionicons
          name="menu"
          style={Styles.headerIconMenu}
          onPress={navigation.openDrawer}
        />
      </View>
      <View style={Styles.headerTitileContainer}>
        <Text style={Styles.headerText}>{currentScreen}</Text>
      </View>
    </View>
  );
}

export default withGlobalContext(Header);
