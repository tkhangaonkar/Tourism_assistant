import React, { Component } from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Styles from "./Styles";
import { HOME, PROFILE } from "../Common/Constants";
import { withGlobalContext } from "../Context";

class Layout extends Component {
  handleNavigation = async (screen) => {
    const { navigation, setCurrentScreen } = this.props;
    setCurrentScreen(screen, () => {
      navigation.closeDrawer();
      navigation.navigate(screen);
    });
  };

  isActiveScreen = (screen) => {
    const { currentScreen } = this.props;
    return currentScreen === screen ? Styles.optioncontainerActive : {};
  };

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const {
      user: { name },
    } = this.props;
    return (
      <DrawerContentScrollView style={Styles.container} scrollEnabled={false}>
        <View style={Styles.profileDetailsContainer}>
          <Text style={Styles.profileTitle}>TRIP PLANNER</Text>
          <Text style={Styles.profileSecondaryText}>{name}</Text>
        </View>
        <View style={Styles.options}>
          <View
            style={[Styles.optionContainer, this.isActiveScreen(HOME)]}
            onTouchEnd={() => this.handleNavigation(HOME)}
          >
            <View style={Styles.iconContainer}>
              <FontAwesome name="home" style={Styles.iconHome} />
            </View>
            <Text style={Styles.optionText}>Home</Text>
          </View>
          <View
            style={[Styles.optionContainer, this.isActiveScreen(PROFILE)]}
            onTouchEnd={() => this.handleNavigation(PROFILE)}
          >
            <View style={Styles.iconContainer}>
              <FontAwesome name="pencil" style={Styles.iconProfile} />
            </View>
            <Text style={Styles.optionText}>Edit Profile</Text>
          </View>
          <View style={Styles.optionContainer} onTouchEnd={this.handleLogout}>
            <View style={Styles.iconContainer}>
              <Ionicons name="exit" style={Styles.iconLogout} />
            </View>
            <Text style={Styles.optionText}>Logout</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }
}

export default withGlobalContext(Layout);
