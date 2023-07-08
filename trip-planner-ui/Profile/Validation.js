import {
  NAME,
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  CONFIRM_NEW_PASSWORD,
  EMAIL,
  PHONE,
} from "./Constants";

export const validateAllProfileFields = (data) => {
  const errors = {};
  if (!data[NAME]) {
    errors[NAME] = "Specify your name";
  }
  if (!data[EMAIL]) {
    errors[EMAIL] = "Email is required";
  }
  if (!data[PHONE]) {
    errors[PHONE] = "Enter you phone number";
  }
  return errors;
};

export const validatePasswordFields = (data) => {
  const errors = {};
  if (!data[CURRENT_PASSWORD]) {
    errors[CURRENT_PASSWORD] = "Enter your current password";
  }
  if (!data[NEW_PASSWORD]) {
    errors[NEW_PASSWORD] = "Enter a new password";
  }
  if (data[NEW_PASSWORD] && !data[CONFIRM_NEW_PASSWORD]) {
    errors[CONFIRM_NEW_PASSWORD] = "Confirm your new password";
  }
  if (
    data[NEW_PASSWORD] &&
    data[CONFIRM_NEW_PASSWORD] &&
    data[NEW_PASSWORD] !== data[CONFIRM_NEW_PASSWORD]
  ) {
    errors[NEW_PASSWORD] = "Passwords do not match";
    errors[CONFIRM_NEW_PASSWORD] = "Passwords do not match";
  }
  return errors;
};
