const moment = require("moment");
const { sqlQuery } = require("../config");
const { error, success, notFound } = require("../response");
const {
  INSERT_USER,
  LOGIN_USER,
  USER_EXISTS,
  GET_USER_DETAILS,
  REG_USER_EXISTS,
  UPDATE_USER_DETAILS,
  GET_FEEDBACK,
  SAVE_FEEDBACK,
  INSERT_FEEDBACK,
  GET_ALL_FEEDBACKS,
} = require("./queries");
const { validateRegisterFields } = require("./validator");

const registerUser = async (data) => {
  const { name, email, password, phone } = data;
  const errors = validateRegisterFields(data);
  if (Object.keys(errors).length) {
    const [message] = Object.values(errors);
    return error(message);
  } else {
    const [userExists] = await sqlQuery(USER_EXISTS, [email]);
    if (userExists.length) {
      return error("Email already registered");
    }
    const [result] = await sqlQuery(INSERT_USER, [
      name,
      email,
      password,
      phone,
    ]);
    if (result.insertId) {
      return success();
    }
    return error("Could not register");
  }
};

const loginUser = async (data) => {
  const { email, password } = data;
  const [userExists] = await sqlQuery(USER_EXISTS, [email]);
  if (!userExists.length) {
    return notFound("User not found");
  }
  const [result] = await sqlQuery(LOGIN_USER, [email, password]);
  if (result.length) {
    const { id } = result[0];
    const [user] = await sqlQuery(GET_USER_DETAILS, [id]);
    return success(user[0]);
  } else {
    return notFound("Incorrect password");
  }
};

const updateDetails = async (data) => {
  const { id, name, email, phone } = data;
  const [userExists] = await sqlQuery(REG_USER_EXISTS, [id]);
  if (!userExists.length) {
    return notFound("User not found");
  }
  await sqlQuery(UPDATE_USER_DETAILS, [
    name,
    email,
    phone,
    id,
  ]);
  return success();
};

const saveFeedback = async (data) => {
  const { id, rating, feedback } = data;
  const date = moment().format();
  const [existingFeedback] = await sqlQuery(GET_FEEDBACK, [id]);
  if (existingFeedback.length) {
    await sqlQuery(SAVE_FEEDBACK, [rating, feedback, date, id]);
  } else {
    await sqlQuery(INSERT_FEEDBACK, [id, rating, feedback, date]);
  }
  return success(null, "Feedback saved");
};

const getFeedback = async (id) => {
  const [data] = await sqlQuery(GET_FEEDBACK, [id]);
  if (data.length) {
    return success(data[0]);
  } else {
    return success({});
  }
};

const getAllFeedbacks = async () => {
  const [data] = await sqlQuery(GET_ALL_FEEDBACKS);
  return success(data);
};

module.exports = {
  loginUser,
  registerUser,
  updateDetails,
  saveFeedback,
  getFeedback,
  getAllFeedbacks,
};
