import React, { Component } from "react";
import { View, Text } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Styles from "./Styles";
import { ERROR, SUCCESS, WARNING } from "./Constants";

export default class Snackbar extends Component {
  getSnackType = () => {
    const { type } = this.props;
    switch (type) {
      case ERROR:
        return [Styles.snackContainer, Styles.snackError];
      case SUCCESS:
        return [Styles.snackContainer, Styles.snackSuccess];
      case WARNING:
        return [Styles.snackContainer, Styles.snackWarning];
      default:
        return [Styles.snackContainer, Styles.snackWarning];
    }
  };

  getSnackIcon = () => {
    const { type } = this.props;
    switch (type) {
      case ERROR:
        return <MaterialIcons name="error-outline" style={Styles.snackIcon} />;
      case SUCCESS:
        return <Feather name="check-circle" style={Styles.snackIcon} />;
      case WARNING:
        return <Ionicons name="warning-outline" style={Styles.snackIcon} />;
      default:
        return <Feather name="info" style={Styles.snackIcon} />;
    }
  };

  render() {
    const { message } = this.props;
    return (
      <View style={this.getSnackType()}>
        {this.getSnackIcon()}
        <Text style={Styles.snackMessage}>{message}</Text>
      </View>
    );
  }
}
