import { StyleSheet } from "react-native";
import Colors from "../Common/Colors";
import { HEIGHT, NORMALIZE_FONT, WIDTH } from "../Common/Constants";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
  },
  iconContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
  iconAddFine: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(32),
  },
  iconFines: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(21),
  },
  iconHome: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(25),
  },
  iconLogout: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(26) },
  iconProfile: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(25) },
  iconViewPurohits: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(22) },
  iconBookings: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(27) },
  iconFeedbacks: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(26) },
  iconSchedule: { color: Colors.PRIMARY, fontSize: NORMALIZE_FONT(23) },
  iconCategories: {
    color: Colors.PRIMARY,
    fontSize: 24,
  },
  options: {
    backgroundColor: Colors.WHITE,
    height: HEIGHT,
    paddingTop: 15,
  },
  optionContainer: {
    alignItems: "center",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    margin: 7,
    marginLeft: 20,
    marginRight: 20,
    padding: 3,
    paddingLeft: 8,
    paddingRight: 8,
  },
  optioncontainerActive: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 5,
  },
  optionText: {
    color: Colors.BLACK_LIGHT,
    fontSize: NORMALIZE_FONT(15),
    fontWeight: "700",
    marginLeft: 5,
  },
  profileDetailsContainer: {
    // alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    // justifyContent: "center",
    padding: 20,
  },
  profilePicture: {
    borderColor: Colors.GRAY_DARK,
    borderRadius: 50,
    borderWidth: 0.5,
    height: 75,
    width: 75,
  },
  profileSecondaryText: {
    color: Colors.GRAY_LIGHT,
    fontSize: NORMALIZE_FONT(16),
    marginTop: 1,
  },
  profileTitle: {
    color: Colors.WHITE,
    fontSize: NORMALIZE_FONT(18),
    fontWeight: "700",
    marginTop: 0,
  },
  // Header
  headerContainer: {
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    width: WIDTH,
  },
  headerIconMenu: {
    color: Colors.WHITE,
    fontSize: NORMALIZE_FONT(32),
  },
  headerMenuContainer: {
    alignItems: "center",
    display: "flex",
    height: 35,
    justifyContent: "center",
    marginLeft: 5,
    width: 35,
  },
  headerText: {
    color: Colors.WHITE,
    fontSize: NORMALIZE_FONT(20),
    fontWeight: "bold",
    marginLeft: -35,
  },
  headerTitileContainer: {
    alignItems: "center",
    width: WIDTH - 40,
  },
});

export default Styles;
