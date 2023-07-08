import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { HEIGHT, STATUS_BAR_HEIGHT, WIDTH } from "./Constants";

const Styles = StyleSheet.create({
  // Card
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5,
    marginLeft: 3,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: Colors.GRAY_DARK,
    width: WIDTH - 30,
  },
  // Loader
  loaderContainer: {
    alignItems: "center",
    display: "flex",
    height: HEIGHT,
    justifyContent: "center",
    width: WIDTH,
  },
  loadingImage: {
    height: 150,
    marginTop: -120,
    width: 150,
  },
  loadingText: { color: Colors.MATTE_BLUE, fontSize: 16, marginTop: -50 },
  // Custom scroll view
  customScrollView: {
    backgroundColor: Colors.WHITE,
    paddingLeft: 12,
    paddingRight: 12,
  },
  customScrollViewContainer: {
    backgroundColor: Colors.WHITE,
    height: HEIGHT - STATUS_BAR_HEIGHT - 113,
  },
  // Snack
  snackContainer: {
    alignItems: "center",
    borderRadius: 5,
    bottom: 20,
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
    padding: 10,
    position: "absolute",
    width: WIDTH - 30,
  },
  // Snack type background colors
  snackError: {
    backgroundColor: Colors.MATTE_RED,
  },
  snackSuccess: {
    backgroundColor: Colors.MATTE_GREEN,
  },
  snackWarning: {
    backgroundColor: Colors.MATTE_YELLOW,
  },
  snackIcon: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  snackMessage: {
    color: Colors.WHITE,
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Styles;
