import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import HomeImage from "../assets/home.png";
import { withGlobalContext } from "../Context";
import Styles from "./Styles";
import CustomScrollView from "../Common/CustomScrollView";
import Card from "../Common/Card";
import { Button } from "react-native-elements";
import { VIEW_PUROHIT } from "../Common/Constants";

class Home extends Component {
  componentDidMount() {
    this.setNavigationTitle();
  }

  setNavigationTitle = () => {
    const { navigation } = this.props;
    navigation.closeDrawer();
  };

  handleNavigation = (screen) => {
    const { navigation, setCurrentScreen } = this.props;
    setCurrentScreen(VIEW_PUROHIT, () => {
      navigation.navigate(screen);
    });
  };

  render() {
    return (
      <CustomScrollView>
        <Card>
          <Text style={Styles.cardTitle}>Look-up for affordable plans</Text>
          <Text style={Styles.cardText}>
            Got a budget constraint? use the search option below to find hotels
            and activities that fit within your budget. Get the best offers
            possible to visit your planned places!
          </Text>
        </Card>
        <View style={Styles.imageContainer}>
          <Image source={HomeImage} style={Styles.image} />
        </View>
        <Card>
          <Text style={Styles.cardTitle}>
            Click on the button below to get started
          </Text>
          <Button
            title="Plan your trip"
            buttonStyle={Styles.buttonContainer}
            titleStyle={Styles.buttonTitle}
            onPress={() => this.handleNavigation(VIEW_PUROHIT)}
          />
        </Card>
        <Card>
          <Text style={Styles.cardTitle}>App features</Text>
          <Text style={Styles.cardText}>- Search for hotels and activities</Text>
          <Text style={Styles.cardText}>- Filter based on budget</Text>
          <Text style={Styles.cardText}>- Book everything online</Text>
          <Text style={Styles.cardText}>- Edit your profile and password</Text>
          <Text style={Styles.cardText}>- Provide feedback</Text>
        </Card>
      </CustomScrollView>
    );
  }
}

export default withGlobalContext(Home);
