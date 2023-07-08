import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as Contacts from "expo-contacts";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import PreLoginNavigation from "./Navigation/PreLoginNavigation";
import Navigation from "./Navigation/Navigation";
import {
  ERROR,
  ERROR_MESSAGE,
  STATUS_BAR_HEIGHT,
  USER_DETAILS,
  WARNING,
} from "./Common/Constants";
import Snackbar from "./Common/Snackbar";
import Loader from "./Common/Loader";
import { GlobalContextProvider } from "./Context";
import Colors from "./Common/Colors";
import { getItem, removeItem, setItem } from "./Common/Store";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "Home",
      isAdmin: false,
      loader: false,
      loggedIn: false,
      permissions: {
        camera: false,
        contacts: false,
        location: false,
        notifications: false,
        storage: false,
      },
      showSnack: false,
      snackType: WARNING,
      snackMessage: "Hello!",
      user: {},
    };
  }

  componentDidMount() {
    // this.initializePermissions();
    this.checkLogin();
  }

  initializePermissions = () => {
    // this.getContactsPermission();
    this.getLocationPermission();
    this.getMediaPermission();
    this.getNotificationsPermission();
    this.getNotificationToken();
  };

  getCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ status: status === "granted" });
  };

  getContactsPermission = async () => {
    const { permissions } = this.state;
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      permissions.contacts = true;
      this.loadContacts();
    } else {
      permissions.contacts = false;
    }
    this.setState({ permissions });
  };

  getMediaPermission = async () => {
    const { permissions } = this.state;
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      permissions.storage = true;
    } else {
      permissions.storage = false;
    }
    this.setState({ permissions });
  };

  getLocationPermission = async () => {
    const { permissions } = this.state;
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      permissions.location = true;
    } else {
      permissions.location = false;
    }
    this.setState({ permissions });
  };

  getNotificationsPermission = async () => {
    const { permissions } = this.state;
    let { status } = await Notifications.getPermissionsAsync();
    if (status === "granted") {
      permissions.notifications = true;
    } else {
      permissions.notifications = false;
    }
    this.setState({ permissions });
  };

  getNotificationToken = async () => {
    const { user } = this.state;
    if (user.id) {
      const token = await this.registerForPushNotificationsAsync();
      console.log("NOTIFICATIONS TOKEN - ", token);
    }
  };

  setPermission = (name, value) => {
    if (name && value) {
      const { permissions } = this.state;
      permissions[name] = value;
      this.setState({ permissions });
    }
  };

  setCurrentScreen = (currentScreen, callback) => {
    this.setState({ currentScreen }, () => {
      if (callback) {
        callback();
      }
    });
  };

  setLoader = (loader) => {
    if (loader) {
      setTimeout(() => {
        this.setState({ loader: false });
      }, 10000);
    }
    this.setState({ loader });
  };

  startSnack = (
    snackType = WARNING,
    snackMessage = ERROR_MESSAGE,
    snackDelay = 4000
  ) => {
    this.setState({ showSnack: true, snackType, snackMessage });
    setTimeout(this.hideSnackbar, snackDelay);
  };

  hideSnackbar = () => {
    this.setState({
      showSnack: false,
      snackType: WARNING,
      snackMessage: ERROR_MESSAGE,
    });
  };

  registerForPushNotificationsAsync = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        this.startSnack(
          ERROR,
          "Failed to get push token for push notification!"
        );
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      this.startSnack(ERROR, "Must use physical device for Push Notifications");
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return token;
  };

  checkLogin = async () => {
    const user = await getItem(USER_DETAILS);
    if (user?.id) {
      this.setState({ user, loggedIn: true });
    }
  };

  login = async (user) => {
    await setItem(USER_DETAILS, user);
    this.setState({ user, loggedIn: true });
  };

  logout = async () => {
    await removeItem(USER_DETAILS);
    this.setState({ user: {}, loggedIn: false });
  };

  render() {
    const {
      showSnack,
      snackType,
      snackMessage,
      currentScreen,
      isAdmin,
      loader,
      loggedIn,
      permissions,
      user,
    } = this.state;
    const context = {
      currentScreen,
      loader,
      loggedIn,
      permissions,
      isAdmin,
      user,
      hideSnackbar: this.hideSnackbar,
      setCurrentScreen: this.setCurrentScreen,
      setLoader: this.setLoader,
      setPermission: this.setPermission,
      startSnack: this.startSnack,
      login: this.login,
      logout: this.logout,
    };
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <NavigationContainer>
          <GlobalContextProvider value={context}>
            {loggedIn ? <Navigation /> : <PreLoginNavigation />}
            {showSnack ? (
              <Snackbar type={snackType} message={snackMessage} />
            ) : null}
            {loader ? <Loader /> : null}
          </GlobalContextProvider>
        </NavigationContainer>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
});
