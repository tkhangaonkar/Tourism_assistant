import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import LandingImage from "../assets/landing.jpg";
import { REGISTER, LOGIN } from "../Common/Constants";
import Styles from "./Styles";

export default class Landing extends Component {
  handleNavigation = (screen) => {
    const { navigation } = this.props;
    navigation?.navigate(screen);
  };

  render() {
    return (
      <View style={Styles.landingContainer}>
        <Text style={Styles.landingTitle}>Trip Planner</Text>
        <Text style={Styles.landingTitleHint}>trips made budget friendly</Text>
        <View style={Styles.landingImageContainer}>
          <Image source={LandingImage} style={Styles.landingImage} />
        </View>
        <Button
          title="LOGIN"
          containerStyle={Styles.landingButton}
          buttonStyle={Styles.buttonLogin}
          titleStyle={Styles.buttonLoginTitle}
          onPress={() => this.handleNavigation(LOGIN)}
        />
        <View style={Styles.landingRegister}>
          <Text style={Styles.landingRegisterTitle}>
            Don't have an account?{" "}
            <Text
              style={Styles.landingRegisterLink}
              onPress={() => this.handleNavigation(REGISTER)}
            >
              sign up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
