import { BIRTH_DATE, EMAIL, NAME, PASSWORD, PHONE } from "../Profile/Constants";
import { VALIDATE_EMAIL, VALIDATE_PHONE } from "../Common/Constants";

export const validateRegisterFields = (data) => {
  const errors = {};
  if (!data[NAME]) {
    errors[NAME] = "Name is required";
  }
  if (!VALIDATE_EMAIL.test(data[EMAIL])) {
    errors[EMAIL] = "Enter a valid email";
  }
  if (!data[PASSWORD]) {
    errors[PASSWORD] = "Password is required";
  } else if (data[PASSWORD]?.length < 6) {
    errors[PASSWORD] = "Minimum 6 characters";
  }
  if (!VALIDATE_PHONE.test(data[PHONE])) {
    errors[PHONE] = "Enter a valid email";
  }
  return errors;
};

export const validateLoginFields = (data) => {
  const errors = {};
  if (!VALIDATE_EMAIL.test(data[EMAIL])) {
    errors[EMAIL] = "Enter a valid email";
  }
  if (!data[PASSWORD]) {
    errors[PASSWORD] = "Password is required";
  }
  return errors;
};
