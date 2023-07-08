import { StyleSheet } from "react-native";
import Colors from "../Common/Colors";
import { NORMALIZE_FONT } from "../Common/Constants";

const Styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 10,
    width: "100%",
  },
  buttonTitle: {
    fontSize: NORMALIZE_FONT(12),
  },
  cardTitle: {
    color: Colors.PRIMARY,
    fontSize: NORMALIZE_FONT(16),
    fontWeight: "700",
  },
  cardText: {
    color: Colors.BLACK_LIGHT,
    fontSize: NORMALIZE_FONT(14),
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
    fontSize: NORMALIZE_FONT(20),
    height: 20,
    width: 20,
  },
  featuresText: {
    color: Colors.BLACK_LIGHT,
    fontSize: NORMALIZE_FONT(15),
    marginLeft: 5,
  },
  image: { height: 130, width: 290 },
  imageContainer: { alignItems: "center", marginTop: 20, marginBottom: 20 },
  sectionText: {
    color: Colors.BLACK_LIGHT,
    textAlign: "justify",
  },
  sectionTitle: {
    color: Colors.ORANGE,
    fontSize: NORMALIZE_FONT(16),
  },
  textLink: {
    color: Colors.MATTE_BLUE,
  },
});

export default Styles;
