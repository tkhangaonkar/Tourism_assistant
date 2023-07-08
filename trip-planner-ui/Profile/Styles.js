import { StyleSheet } from "react-native";
import Colors from "../Common/Colors";
import { NORMALIZE_FONT } from "../Common/Constants";

const Styles = StyleSheet.create({
  basicTitle: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(16),
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonSaveContainer: {
    backgroundColor: Colors.PRIMARY,
    width: 100,
  },
  buttonSaveTitle: {
    fontSize: NORMALIZE_FONT(12),
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  iconClose: {
    color: Colors.GRAY,
    fontSize: NORMALIZE_FONT(25),
  },
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
    fontSize: NORMALIZE_FONT(15),
    marginBottom: -6,
    marginTop: -6,
  },
  modalTitle: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(18),
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    width: "92%",
  },
  modalContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  modalSubContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    height: "100%",
    padding: 15,
    width: "100%",
  },
  categoryContainer: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 5,
    marginTop: 6,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    width: "90%",
  },
  category: {
    color: Colors.BLACK_LIGHT,
    fontSize: NORMALIZE_FONT(15),
  },
  sectionText: {
    color: Colors.BLACK_LIGHT,
    textAlign: "justify",
  },
  sectionTitle: {
    color: Colors.ORANGE,
    fontSize: NORMALIZE_FONT(16),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: -25,
    marginTop: 10,
    padding: 15,
  },
  passwordVisibilityIcon: {
    color: Colors.GRAY_DARK,
    fontSize: NORMALIZE_FONT(25),
    marginBottom: -5,
  },
  profileDetailsContainer: {
    alignItems: "center",
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,
    justifyContent: "center",
    marginBottom: 20,
    padding: 20,
  },
  profilePicture: {
    borderColor: Colors.GRAY_DARK,
    borderRadius: 50,
    borderWidth: 0.5,
    height: 75,
    width: 75,
  },
  profilePrimaryText: {
    color: Colors.BLACK_LIGHT,
    fontSize: NORMALIZE_FONT(15),
    marginTop: 15,
  },
  profileSecondaryText: { fontSize: NORMALIZE_FONT(18) },
  profileTitle: {
    fontSize: NORMALIZE_FONT(20),
  },
  saveButtonContainer: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: Colors.GRAY_DARK,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
});

export default Styles;
