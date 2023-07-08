import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./Styles";
import {
  ERROR,
  ERROR_MESSAGE,
  PROFILE,
  SUCCESS,
  WARNING,
} from "../Common/Constants";
import {
  ID,
  NAME,
  EMAIL,
  ADDRESS,
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  PICTURE,
  BIRTH_DATE,
  PHONE,
  CATEGORY,
  PRICE,
  PASSWORD,
} from "./Constants";
import { validateAllProfileFields, validatePasswordFields } from "./Validation";
import { withGlobalContext } from "../Context";
import {
  resetUserPassword,
  updateUserDetails,
  updateUserPicture,
} from "./Services";
import CustomScrollView from "../Common/CustomScrollView";
import Card from "../Common/Card";
import { getCategories } from "./Services";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formData: {
        [ID]: 0,
        [NAME]: "",
        [EMAIL]: "",
        [PHONE]: "",
        [CURRENT_PASSWORD]: "",
        [NEW_PASSWORD]: "",
        [CONFIRM_NEW_PASSWORD]: "",
      },
      category: "",
      showCalendar: false,
      showCategories: false,
      errors: {},
      passwordVisibility: {
        [CURRENT_PASSWORD]: true,
        [NEW_PASSWORD]: true,
        [CONFIRM_NEW_PASSWORD]: true,
      },
    };
    this[NAME] = null;
    this[EMAIL] = null;
    this[PHONE] = null;
    this[CATEGORY] = null;
    this[ADDRESS] = null;
    this[PRICE] = null;
    this[CURRENT_PASSWORD] = null;
    this[NEW_PASSWORD] = null;
    this[CONFIRM_NEW_PASSWORD] = null;
    this.categoryId = null;
  }

  componentDidMount() {
    this.initializeData();
    this.setNavigationTitle();
  }

  initializeData = () => {
    let { user } = this.props;
    const formData = {
      ...user,
    };
    this.setState({ formData });
  };

  setNavigationTitle = () => {
    const { navigation, setCurrentScreen } = this.props;
    setCurrentScreen(PROFILE);
    navigation.closeDrawer();
  };

  handleTextChange = (name, value) => {
    const { formData, errors } = this.state;
    formData[name] = value;
    delete errors[name];
    if (name === CONFIRM_NEW_PASSWORD || name === NEW_PASSWORD) {
      delete errors[CONFIRM_NEW_PASSWORD];
      delete errors[NEW_PASSWORD];
    }
    this.setState({ formData, errors });
  };

  togglePasswordVisibility = (name) => {
    const { passwordVisibility } = this.state;
    passwordVisibility[name] = !passwordVisibility[name];
    this.setState({ passwordVisibility });
  };

  saveProfileDetails = () => {
    const { name, email, address } = this.state;
    const data = { name, email, address };
    const errors = validateAllProfileFields(data);
    const errorKeys = Object.keys(errors);
    if (errorKeys.length) {
      if (this[errorKeys[0]]) {
        this[errorKeys[0]].focus();
      }
      this.setState({ errors });
      return;
    }
    this.saveUserDetails();
  };

  savePassword = async () => {
    const { formData } = this.state;
    const { setLoader, startSnack } = this.props;
    const errors = validatePasswordFields(formData);
    const errorKeys = Object.keys(errors);
    if (errorKeys.length) {
      if (this[errorKeys[0]]) {
        this[errorKeys[0]].focus();
      }
      this.setState({ errors });
      return;
    }
    setLoader(true);
    try {
      const { data } = await resetUserPassword(formData);
      if (data.status === 200) {
        startSnack(SUCCESS, "Updated password");
        formData[CURRENT_PASSWORD] = "";
        formData[NEW_PASSWORD] = "";
        formData[CONFIRM_NEW_PASSWORD] = "";
        this.setState({
          formData,
        });
      } else {
        startSnack(WARNING, data.message);
      }
    } catch (e) {
      startSnack(ERROR, ERROR_MESSAGE);
    } finally {
      setLoader(false);
    }
  };

  saveUserDetails = async () => {
    const { startSnack, setLoader, login } = this.props;
    const { formData } = this.state;
    const errors = validateAllProfileFields(formData);
    const [firstError] = Object.keys(errors);
    if (firstError) {
      this[firstError]?.focus();
      this.setState({ errors });
    } else {
      setLoader(true);
      try {
        const { data } = await updateUserDetails(formData);
        if (data.status === 200) {
          startSnack(SUCCESS, "Updated successfully");
          login(formData);
        } else {
          startSnack(WARNING, "Could not update");
        }
      } catch (e) {
        console.log(e);
        startSnack(ERROR, ERROR_MESSAGE);
      } finally {
        setLoader(false);
      }
    }
  };

  updateUserDetails = () => {
    const { setUserDetails } = this.props;
    const { name, email, address, picture } = this.state;
    setUserDetails({
      name,
      email,
      address,
      picture,
    });
  };

  handleCategoryChange = (category) => {
    this.categoryId = category?.id;
    this.setState({ category: category.title }, () =>
      this.showCategories(false)
    );
  };

  showCategories = (showCategories) => {
    this.setState({ showCategories });
  };

  render() {
    const {
      user: { type },
    } = this.props;
    const { errors, passwordVisibility, formData } = this.state;
    return (
      <>
        <CustomScrollView>
          <Card>
            <Text style={Styles.basicTitle}>Basic information</Text>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Full name *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[NAME]}
                onChangeText={(text) => this.handleTextChange(NAME, text)}
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[NAME]}
                ref={(ref) => {
                  this[NAME] = ref;
                }}
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Email *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[EMAIL]}
                onChangeText={(text) => this.handleTextChange(EMAIL, text)}
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[EMAIL]}
                ref={(ref) => {
                  this[EMAIL] = ref;
                }}
                disabled
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Phone *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[PHONE]}
                onChangeText={(text) => this.handleTextChange(PHONE, text)}
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[PHONE]}
                ref={(ref) => {
                  this[PHONE] = ref;
                }}
                keyboardType="number-pad"
              />
              <View style={Styles.saveButtonContainer}>
                <Button
                  title="Save"
                  buttonStyle={Styles.buttonSaveContainer}
                  titleStyle={Styles.buttonSaveTitle}
                  onPress={this.saveUserDetails}
                />
              </View>
            </View>
          </Card>
          <Card>
            <Text style={Styles.basicTitle}>Change password</Text>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Current password *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[CURRENT_PASSWORD]}
                onChangeText={(text) =>
                  this.handleTextChange(CURRENT_PASSWORD, text)
                }
                secureTextEntry={passwordVisibility[CURRENT_PASSWORD]}
                rightIcon={
                  formData[CURRENT_PASSWORD] ? (
                    <Ionicons
                      name={
                        passwordVisibility[CURRENT_PASSWORD] ? "eye" : "eye-off"
                      }
                      style={Styles.passwordVisibilityIcon}
                      onPress={() =>
                        this.togglePasswordVisibility(CURRENT_PASSWORD)
                      }
                    />
                  ) : null
                }
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[CURRENT_PASSWORD]}
                ref={(ref) => {
                  this[CURRENT_PASSWORD] = ref;
                }}
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>New password *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[NEW_PASSWORD]}
                onChangeText={(text) =>
                  this.handleTextChange(NEW_PASSWORD, text)
                }
                secureTextEntry={passwordVisibility[NEW_PASSWORD]}
                rightIcon={
                  formData[NEW_PASSWORD] ? (
                    <Ionicons
                      name={
                        passwordVisibility[NEW_PASSWORD] ? "eye" : "eye-off"
                      }
                      style={Styles.passwordVisibilityIcon}
                      onPress={() =>
                        this.togglePasswordVisibility(NEW_PASSWORD)
                      }
                    />
                  ) : null
                }
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[NEW_PASSWORD]}
                ref={(ref) => {
                  this[NEW_PASSWORD] = ref;
                }}
              />
            </View>
            <View style={Styles.inputContainer}>
              <Text style={Styles.inputFieldLabel}>Confirm new password *</Text>
              <Input
                containerStyle={Styles.inputFieldContainer}
                inputStyle={Styles.inputFieldValue}
                value={formData[CONFIRM_NEW_PASSWORD]}
                onChangeText={(text) =>
                  this.handleTextChange(CONFIRM_NEW_PASSWORD, text)
                }
                secureTextEntry={passwordVisibility[CONFIRM_NEW_PASSWORD]}
                rightIcon={
                  formData[CONFIRM_NEW_PASSWORD] ? (
                    <Ionicons
                      name={
                        passwordVisibility[CONFIRM_NEW_PASSWORD]
                          ? "eye"
                          : "eye-off"
                      }
                      style={Styles.passwordVisibilityIcon}
                      onPress={() =>
                        this.togglePasswordVisibility(CONFIRM_NEW_PASSWORD)
                      }
                    />
                  ) : null
                }
                errorStyle={Styles.inputErrorText}
                errorMessage={errors[CONFIRM_NEW_PASSWORD]}
                ref={(ref) => {
                  this[CONFIRM_NEW_PASSWORD] = ref;
                }}
              />
            </View>
            <View style={Styles.saveButtonContainer}>
              <Button
                title="Change"
                buttonStyle={Styles.buttonSaveContainer}
                titleStyle={Styles.buttonSaveTitle}
                onPress={this.savePassword}
              />
            </View>
          </Card>
        </CustomScrollView>
      </>
    );
  }
}

export default withGlobalContext(Profile);
