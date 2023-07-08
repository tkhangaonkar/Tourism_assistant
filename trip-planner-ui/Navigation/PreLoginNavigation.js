import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../Landing/Landing";
import Register from "../Landing/Register";
import Login from "../Landing/Login";
import { LANDING, LOGIN, REGISTER } from "../Common/Constants";

const Stack = createStackNavigator();

export default class PreLoginNavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName={LANDING}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name={LANDING} component={Landing} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={REGISTER} component={Register} />
      </Stack.Navigator>
    );
  }
}
