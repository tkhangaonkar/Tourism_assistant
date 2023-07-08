import React from "react";
import { View, Image } from "react-native";
import LoadingImage from "../assets/loading.gif";
import Styles from "./Styles";

function Loader() {
  return (
    <View style={Styles.loaderContainer}>
      <Image source={LoadingImage} style={Styles.loadingImage} />
    </View>
  );
}

export default Loader;
