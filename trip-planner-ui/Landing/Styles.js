import { StyleSheet } from "react-native";
import {
  HEIGHT,
  NORMALIZE_FONT,
  STATUS_BAR_HEIGHT,
  WIDTH,
} from "../Common/Constants";
import COLORS from "../Common/Colors";
import Colors from "../Common/Colors";

const Styles = StyleSheet.create({
  // Landing styles
  buttonLogin: {
    backgroundColor: COLORS.PRIMARY,
  },
  buttonLoginContainer: {
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 15,
  },
  buttonLoginTitle: {
    color: COLORS.WHITE,
    fontSize: NORMALIZE_FONT(13),
  },
  formContainer: {
    marginTop: 25,
  },
  header: { marginLeft: 8, marginTop: 0 },
  headerArrow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: COLORS.GRAY,
    fontSize: NORMALIZE_FONT(22),
  },
  image: {
    height: 220,
    width: 280,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  inputErrorText: {
    color: Colors.MATTE_RED,
    marginLeft: 0,
    marginTop: 0,
  },
  inputContainer: {
    margin: 0,
    marginTop: 0,
    padding: 0,
  },
  inputFieldLabel: {
    color: Colors.BLACK_LIGHT,
    marginLeft: 9,
  },
  inputFieldValue: {
    fontSize: NORMALIZE_FONT(15),
    marginBottom: -6,
    marginTop: -6,
  },
  landingButton: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 15,
    width: WIDTH - 110,
  },
  landingContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: -10,
  },
  landingImageContainer: {
    marginBottom: 50,
    marginTop: 50,
  },
  landingImage: {
    height: 190,
    width: 290,
  },
  landingRegister: {
    marginTop: 8,
  },
  landingRegisterLink: {
    color: COLORS.TEXT_LINK,
  },
  landingTitle: {
    color: COLORS.PRIMARY,
    fontSize: NORMALIZE_FONT(32),
    fontWeight: "700",
  },
  landingRegisterTitle: {
    color: COLORS.RED,
  },
  landingTitleHint: {
    color: COLORS.BLACK,
    fontSize: NORMALIZE_FONT(14),
  },
  newAccountHint: {
    color: COLORS.PRIMARY,
    marginLeft: 10,
  },
  passwordVisibilityIcon: {
    color: Colors.GRAY_DARK,
    fontSize: NORMALIZE_FONT(25),
    marginBottom: -5,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: NORMALIZE_FONT(20),
    fontWeight: "600",
  },
  titleBottomBorder: {
    borderColor: COLORS.PRIMARY,
    borderTopWidth: 6,
    borderRadius: 50,
    width: 20,
  },
  subTitle: {
    color: COLORS.PRIMARY,
    fontSize: NORMALIZE_FONT(20),
    fontWeight: "600",
  },
});

export default Styles;
