import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import * as Linking from "expo-linking";
import { Rating } from "react-native-ratings";
import { withGlobalContext } from "../Context";
import CustomScrollView from "../Common/CustomScrollView";
import Card from "../Common/Card";
import Styles from "./Style";
import { getAllFeedbacks, getFeedback, saveFeedback } from "./Services";
import { ERROR, ERROR_MESSAGE, SUCCESS } from "../Common/Constants";
import moment from "moment";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feedback: "",
      rating: 5,
      showStatusPopup: false,
    };
    this.originalData = [];
    this.selectedBooking = null;
    this.type = null;
  }

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const {
      user: { type },
    } = this.props;
    this.type = type;
    this.getAllFeedback();
    if (type === 1) {
    } else {
      this.getFeedback();
    }
  };

  getFeedback = async () => {
    const {
      setLoader,
      startSnack,
      user: { id },
    } = this.props;
    const req = { id };
    setLoader(true);
    try {
      const { data } = await getFeedback(req);
      if (data.status === 200) {
        console.log(data.payload);
        this.setState({ ...this.state, ...data.payload });
      } else {
        startSnack(ERROR, data.message);
      }
    } catch (e) {
      startSnack(ERROR, ERROR_MESSAGE);
    } finally {
      setLoader(false);
    }
  };

  getAllFeedback = async () => {
    const { setLoader, startSnack } = this.props;
    setLoader(true);
    try {
      const { data } = await getAllFeedbacks();
      if (data.status === 200) {
        this.setState({ data: data.payload });
      } else {
        startSnack(ERROR, data.message);
      }
    } catch (e) {
      startSnack(ERROR, ERROR_MESSAGE);
    } finally {
      setLoader(false);
    }
  };

  handleFeedbackTextChange = (feedback) => {
    this.setState({ feedback });
  };

  handleContactOpen = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  showStatusPopup = (showStatusPopup, purohit = null) => {
    this.selectedBooking = showStatusPopup ? purohit : null;
    this.setState({ showStatusPopup });
  };

  ratingCompleted = (rating) => {
    this.setState({ rating });
  };

  saveFeedback = async () => {
    const {
      setLoader,
      startSnack,
      user: { id },
    } = this.props;
    const { rating, feedback } = this.state;
    const req = {
      id,
      rating,
      feedback,
    };
    setLoader(true);
    try {
      const { data } = await saveFeedback(req);
      if (data.status === 200) {
        startSnack(SUCCESS, "Feedback saved");
      } else {
        startSnack(ERROR, data.message);
      }
    } catch (e) {
      startSnack(ERROR, ERROR_MESSAGE);
    } finally {
      setLoader(false);
    }
  };

  render() {
    const { data, feedback, rating } = this.state;
    return (
      <>
        <CustomScrollView>
          {this.type !== 1 ? (
            <>
              <Card>
                <Text style={Styles.textTitle}>Rating</Text>
                <View style={Styles.ratingContainer}>
                  <Rating
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                    ratingCount={5}
                    startingValue={rating}
                    minValue={1}
                    imageSize={16}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[Styles.textTitle, { marginBottom: 10 }]}>
                    Your feedback
                  </Text>
                  <Input
                    multiline
                    numberOfLines={5}
                    placeholder="Enter your feedback here..."
                    maxLength={250}
                    inputStyle={Styles.inputStyle}
                    inputContainerStyle={Styles.inputContainerStyle}
                    containerStyle={Styles.containerStyle}
                    onChangeText={(text) => this.handleFeedbackTextChange(text)}
                    value={feedback}
                  />
                </View>
                <Button
                  title="Submit"
                  buttonStyle={Styles.buttonSaveContainer}
                  titleStyle={Styles.buttonSaveTitle}
                  onPress={this.saveFeedback}
                />
              </Card>
            </>
          ) : (
            data.map((feedback) => (
              <Card key={feedback.id}>
                <View onTouchEnd={() => this.showStatusPopup(true, feedback)}>
                  <Text style={Styles.textDate}>
                    {moment(feedback.date).format("DD-MMM-YYYY")}
                  </Text>
                  <Text style={Styles.textTitle}>{feedback.name}</Text>
                  <View style={Styles.ratingContainer}>
                    <Rating
                      style={{ paddingVertical: 10 }}
                      ratingCount={5}
                      startingValue={feedback.rating}
                      readonly
                      imageSize={16}
                    />
                  </View>
                  {feedback.feedback ? (
                    <Text style={Styles.feedbackText}>{feedback.feedback}</Text>
                  ) : null}
                </View>
              </Card>
            ))
          )}
        </CustomScrollView>
      </>
    );
  }
}

export default withGlobalContext(Feedback);
