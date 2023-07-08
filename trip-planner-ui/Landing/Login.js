import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ImageSource from "../assets/login.jpg";
import Styles from "./Styles";
import { withGlobalContext } from "../Context";
import { ERROR, ERROR_MESSAGE, LANDING } from "../Common/Constants";
import { EMAIL, PASSWORD } from "../Profile/Constants";
import CustomScrollView from "../Common/CustomScrollView";
import { validateLoginFields } from "./Validation";
import { loginUser } from "./Services";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      formData: {
        [EMAIL]: "",
        [PASSWORD]: "",
      },
      passwordVisible: false,
    };
    this[EMAIL] = null;
    this[PASSWORD] = null;
  }

  handleTextChange = (name, value) => {
    const { errors, formData } = this.state;
    delete errors[name];
    formData[name] = value;
    this.setState({ formData, errors });
  };

  handleLogin = async () => {
    const { setLoader, startSnack, login } = this.props;
    const { formData } = this.state;
    const errors = validateLoginFields(formData);
    const [firstError] = Object.keys(errors);
    if (firstError) {
      this[firstError]?.focus();
      this.setState({ errors });
    } else {
      try {
        setLoader(true);
        const { data } = await loginUser(formData);
        if (data.status === 200) {
          login(data.payload);
        } else {
          startSnack(ERROR, data.message);
        }
      } catch (e) {
        console.log(e);
        startSnack(ERROR, ERROR_MESSAGE);
      } finally {
        setLoader(false);
      }
    }
  };

  togglePasswordVisibility = () => {
    const { passwordVisible } = this.state;
    this.setState({ passwordVisible: !passwordVisible });
  };

  render() {
    const { navigation, login } = this.props;
    const { errors, formData, passwordVisible } = this.state;
    return (
      <CustomScrollView>
        <View>
          <Ionicons
            onPress={() => navigation.navigate(LANDING)}
            style={Styles.icon}
            name="arrow-back"
          />
        </View>
        <View style={Styles.imageContainer}>
          <Image style={Styles.image} source={ImageSource} />
        </View>
        <View style={Styles.header}>
          <Text style={Styles.title}>Welcome back!</Text>
          <View style={Styles.titleBottomBorder}></View>
        </View>
        <View style={Styles.formContainer}>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputFieldLabel}>Email *</Text>
            <Input
              containerStyle={Styles.inputFieldContainer}
              inputStyle={Styles.inputFieldValue}
              placeholder="Enter your email"
              ref={(ref) => {
                this[EMAIL] = ref;
              }}
              onChangeText={(text) => this.handleTextChange(EMAIL, text)}
              errorStyle={Styles.inputErrorText}
              errorMessage={errors[EMAIL]}
              value={formData[EMAIL]}
            />
          </View>
          <View style={Styles.inputContainer}>
            <Text style={Styles.inputFieldLabel}>Password *</Text>
            <Input
              containerStyle={Styles.inputFieldContainer}
              inputStyle={Styles.inputFieldValue}
              placeholder="Enter your password"
              ref={(ref) => {
                this[PASSWORD] = ref;
              }}
              onChangeText={(text) => this.handleTextChange(PASSWORD, text)}
              errorStyle={Styles.inputErrorText}
              errorMessage={errors[PASSWORD]}
              value={formData[PASSWORD]}
              secureTextEntry={!passwordVisible}
              rightIcon={
                formData[PASSWORD] ? (
                  <Ionicons
                    name={passwordVisible ? "eye" : "eye-off"}
                    style={Styles.passwordVisibilityIcon}
                    onPress={() => this.togglePasswordVisibility()}
                  />
                ) : null
              }
            />
          </View>
          <Button
            title="LOGIN"
            containerStyle={Styles.buttonLoginContainer}
            buttonStyle={Styles.buttonLogin}
            titleStyle={Styles.buttonLoginTitle}
            onPress={this.handleLogin}
          />
        </View>
      </CustomScrollView>
    );
  }
}

export default withGlobalContext(Login);
