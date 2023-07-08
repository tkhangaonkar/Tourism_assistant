const REG_USER_EXISTS = "SELECT * FROM users WHERE id=?";

const UPDATE_USER_DETAILS = `UPDATE users SET name=?, address=?, contact=?, email=?, birth_date=? WHERE id=?`;

const UPDATE_USER_PICTURE = `UPDATE users SET picture=? WHERE id=?`;

const UPDATE_USER_PASSWORD = `UPDATE users SET password=? WHERE id=?`;

const VERIFY_USER_PASSWORD = `SELECT * FROM users WHERE id=? AND password=?`;

module.exports = {
  REG_USER_EXISTS,
  UPDATE_USER_DETAILS,
  UPDATE_USER_PICTURE,
  UPDATE_USER_PASSWORD,
  VERIFY_USER_PASSWORD,
};
