import React from "react";
import {
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
} from "react-native";
import Styles from "./Styles";

export default function CustomScrollView({ children, refreshing, onRefresh }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        style={Styles.customScrollView}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

CustomScrollView.defaultProps = {
  refreshing: false,
  onRefresh: () => {},
};
