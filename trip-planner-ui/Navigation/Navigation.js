import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./Header";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Layout from "./Layout";
import { HOME, PROFILE } from "../Common/Constants";

const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <Layout {...props} />}
        initialRouteName={HOME}
      >
        <Drawer.Screen
          name={HOME}
          component={Home}
          options={{
            header: (props) => <Header {...props} />,
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name={PROFILE}
          component={Profile}
          options={{
            header: (props) => <Header {...props} />,
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    );
  }
}
