import { Dimensions, Platform, PixelRatio } from "react-native";
import Constants from "expo-constants";

// API URL
export const API_URL = "https://c5e1-2409-4071-4d91-8177-a4b5-a27-24f5-8920.in.ngrok.io";

// Device dimensions
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const HEIGHT = Dimensions.get("screen").height;
export const WIDTH = Dimensions.get("screen").width;

// Snack constants
export const ERROR = "error";
export const WARNING = "warning";
export const SUCCESS = "success";

// Screen Names
export const HOME = "Home";
export const LANDING = "Landing";
export const REGISTER = "Register";
export const LOGIN = "Login";
export const PROFILE = "Profile";
export const FEEDBACKS = "Feedback";

// Store keys
export const USER_CONTACTS = "contacts";
export const USER_LOCATION = "location";
export const USER_PERMISSIONS = "permissions";
export const USER_SETTINGS = "settings";
export const USER_DETAILS = "userDetails";
export const STORE_API_URL = "apiURL";

// Messages
export const ERROR_MESSAGE = "Someting went wrong";

// Validation
export const VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const VALIDATE_PHONE = /^\d{10}$/;

// based on iphone 5s's scale
const scale = WIDTH / 320;

export function NORMALIZE_FONT(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
