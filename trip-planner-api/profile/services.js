const { sqlQuery } = require("../config");
const { success, notFound } = require("../response");
const {
  REG_USER_EXISTS,
  UPDATE_USER_DETAILS,
  UPDATE_USER_PASSWORD,
  VERIFY_USER_PASSWORD,
} = require("./queries");

const updateDetails = async (data) => {
  const { name, address, contact, email, birthDate, price, id } = data;
  const [userExists] = await sqlQuery(REG_USER_EXISTS, [id]);
  if (!userExists.length) {
    return notFound("User not found");
  }
  await sqlQuery(UPDATE_USER_DETAILS, [
    name,
    address,
    contact,
    email,
    birthDate,
    id,
  ]);
  return success();
};

const resetPassword = async (data) => {
  const { id, currentPassword, newPassword } = data;
  const [userExists] = await sqlQuery(REG_USER_EXISTS, [id]);
  if (!userExists.length) {
    return notFound("User not found");
  }
  const [verifyPassword] = await sqlQuery(VERIFY_USER_PASSWORD, [
    id,
    currentPassword,
  ]);
  if (!verifyPassword.length) {
    return notFound("Incorrect password");
  }
  await sqlQuery(UPDATE_USER_PASSWORD, [newPassword, id]);
  return success();
};

module.exports = { updateDetails, resetPassword };
