import { StyleSheet } from "react-native";
import Colors from "../Common/Colors";
import { WIDTH } from "../Common/Constants";

const Styles = StyleSheet.create({
  bookingContainer: {
    marginTop: 15,
  },
  bookingTitle: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 3,
  },
  buttonSaveContainer: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 15,
    width: "100%",
  },
  buttonSaveTitle: {
    fontSize: 12,
  },
  buttonCancelContainer: {
    backgroundColor: Colors.GRAY_LIGHT,
    marginLeft: 6,
    width: 70,
  },
  buttonCancelTitle: {
    color: Colors.BLACK_LIGHT,
    fontSize: 12,
  },
  buttonDisableContainer: {
    backgroundColor: Colors.RED,
    marginLeft: 6,
    width: 70,
  },
  buttonDisableTitle: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  feedbackRating: {
    marginTop: 5,
  },
  feedbackText: {
    marginTop: 5,
  },
  iconBook: {
    color: Colors.PRIMARY,
    fontSize: 25,
    position: "absolute",
    right: 5,
    top: 10,
  },
  iconPending: {
    bottom: 1,
    color: Colors.ORANGE,
    fontSize: 28,
    position: "absolute",
    right: 10,
  },
  iconAccepted: {
    bottom: 1,
    color: Colors.MATTE_GREEN,
    fontSize: 23,
    position: "absolute",
    right: 10,
  },
  iconRejected: {
    bottom: 1,
    color: Colors.RED,
    fontSize: 27,
    position: "absolute",
    right: 10,
  },
  iconPencil: {
    bottom: 1,
    color: Colors.PRIMARY,
    fontSize: 18,
    position: "absolute",
    right: 10,
  },
  inputStyle: {
    fontSize: 15,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    textAlignVertical: "top",
  },
  inputContainerStyle: { borderBottomWidth: 0 },
  containerStyle: {
    borderColor: Colors.GRAY,
    borderRadius: 5,
    borderWidth: 1,
  },
  saveButtonContainer: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    paddingRight: 0,
  },
  cardTitle: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: "700",
  },
  cardText: {
    color: Colors.BLACK_LIGHT,
    fontSize: 14,
    textAlign: "justify",
  },
  container: {
    padding: 20,
  },
  features: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  featuresIcon: {
    color: Colors.GRAY_DARK,
    fontSize: 20,
    height: 20,
    width: 20,
  },
  featuresText: {
    color: Colors.BLACK_LIGHT,
    fontSize: 15,
    marginLeft: 5,
  },
  image: { height: 180, width: 180 },
  imageContainer: { alignItems: "center", margin: 2 },
  inputContainer: {
    marginTop: 3,
  },
  inputErrorText: {
    color: Colors.MATTE_RED,
    marginLeft: 0,
    marginTop: 0,
  },
  inputFieldContainer: {
    marginLeft: -10,
  },
  inputFieldLabel: {
    color: Colors.BLACK_LIGHT,
  },
  inputFieldValue: {
    fontSize: 15,
    marginBottom: -6,
    marginTop: -6,
  },
  modal: {
    alignItems: "center",
    backgroundColor: "#000000a3",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  modalContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    padding: 15,
    width: "90%",
  },
  ratingContainer: {
    alignItems: "flex-start",
  },
  sectionText: {
    color: Colors.BLACK_LIGHT,
    textAlign: "justify",
  },
  sectionTitle: {
    color: Colors.ORANGE,
    fontSize: 16,
  },
  textDate: {
    color: Colors.BLACK_LIGHT,
    position: "absolute",
    top: 1,
    right: 1,
  },
  textHint: {
    color: Colors.GRAY_DARK,
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  textLink: {
    color: Colors.MATTE_BLUE,
  },
  textRowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textLeft: {
    fontSize: 14,
    width: "30%",
  },
  textRight: {
    fontSize: 14,
    width: "70%",
  },
  textTitle: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Styles;
