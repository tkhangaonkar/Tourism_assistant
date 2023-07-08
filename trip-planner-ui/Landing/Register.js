import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import ImageSource from "../assets/register.jpg";
import Styles from "./Styles";
import { withGlobalContext } from "../Context";
import {
  ERROR,
  ERROR_MESSAGE,
  LANDING,
  LOGIN,
  SUCCESS,
} from "../Common/Constants";
import CustomScrollView from "../Common/CustomScrollView";
import {
  ADDRESS,
  BIRTH_DATE,
  EMAIL,
  NAME,
  PASSWORD,
  PHONE,
} from "../Profile/Constants";
import { validateRegisterFields } from "./Validation";
import { registerUser } from "./Services";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      formData: {
        [NAME]: "",
        [EMAIL]: "",
        [PASSWORD]: "",
        [PHONE]: "",
      },
      showCalendar: false,
      passwordVisible: false,
    };
    this[NAME] = null;
    this[EMAIL] = null;
    this[BIRTH_DATE] = null;
    this[PASSWORD] = null;
    this[PHONE] = null;
    this[ADDRESS] = null;
  }

  handleTextChange = (name, value) => {
    const { errors, formData } = this.state;
    delete errors[name];
    formData[name] = value;
    this.setState({ formData, errors });
  };

  showCalendar = () => {
    this.setState({ showCalendar: true });
  };

  handleRegister = async () => {
    const { setLoader, startSnack, navigation } = this.props;
    const { formData } = this.state;
    const errors = validateRegisterFields(formData);
    const [firstError] = Object.keys(errors);
    if (firstError) {
      this[firstError]?.focus();
      this.setState({ errors });
    } else {
      try {
        setLoader(true);
        const { data } = await registerUser(formData);
        if (data.status === 200) {
          startSnack(SUCCESS, "Registered successfully");
          navigation.navigate(LOGIN);
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
    const { navigation } = this.props;
    const { errors, formData, passwordVisible } = this.state;
    return (
      <>
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
            <Text style={Styles.title}>Create new account</Text>
            <View style={Styles.titleBottomBorder}></View>
          </View>
          <View style={Styles.formContainer}>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Full name *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                placeholder="Name"
                ref={(ref) => {
                  this[NAME] = ref;
                }}
                onChangeText={(text) => this.handleTextChange(NAME, text)}
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[NAME]}
                value={formData[NAME]}
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Email *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                placeholder="Email"
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
                placeholder="Type in your password"
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
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Phone *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                placeholder="Phone number"
                ref={(ref) => {
                  this[PHONE] = ref;
                }}
                onChangeText={(text) => this.handleTextChange(PHONE, text)}
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[PHONE]}
                value={formData[PHONE]}
                keyboardType="number-pad"
              />
            </View>
            <Button
              title="REGISTER"
              containerStyle={Styles.buttonLoginContainer}
              buttonStyle={Styles.buttonLogin}
              titleStyle={Styles.buttonLoginTitle}
              onPress={this.handleRegister}
            />
          </View>
        </CustomScrollView>
      </>
    );
  }
}

export default withGlobalContext(Login);
