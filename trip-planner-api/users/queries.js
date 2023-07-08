const INSERT_USER =
  "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?);";

const USER_EXISTS = "SELECT * FROM users WHERE email=?";

const REG_USER_EXISTS = "SELECT * FROM users WHERE id=?";

const LOGIN_USER = "SELECT * FROM users WHERE email=? AND password=?";

const GET_USER_DETAILS = `SELECT id, name, email, password, phone, is_admin AS isAdmin FROM users WHERE id=?`;

const UPDATE_USER_DETAILS = `UPDATE users SET name=?, email=?, phone=? WHERE id=?`;

const UPDATE_USER_PASSWORD = `UPDATE users SET password=? WHERE id=?`;

const GET_ALL_FEEDBACKS =
  "SELECT f.id, u.name, f.rating, f.feedback, f.date FROM feedback f JOIN users u ON u.id=f.user_id;";

const INSERT_FEEDBACK =
  "INSERT INTO feedback (user_id, rating, feedback, date) VALUES (?, ?, ?, ?)";

const GET_FEEDBACK = "SELECT * FROM feedback WHERE user_id=?";

const SAVE_FEEDBACK =
  "UPDATE feedback SET rating=?, feedback=?, date=? WHERE user_id=?";

module.exports = {
  INSERT_USER,
  LOGIN_USER,
  USER_EXISTS,
  REG_USER_EXISTS,
  GET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  UPDATE_USER_PASSWORD,
  GET_ALL_FEEDBACKS,
  GET_FEEDBACK,
  INSERT_FEEDBACK,
  SAVE_FEEDBACK,
};
