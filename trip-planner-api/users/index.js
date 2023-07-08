var express = require("express");
var router = express.Router();
var { error, success } = require("../response");
const {
  registerUser,
  loginUser,
  updateDetails,
  getFeedback,
  getAllFeedbacks,
  saveFeedback,
} = require("./services");

router.post("/register", async (req, res) => {
  try {
    const response = await registerUser(req.body);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await loginUser(req.body);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.put("/details", async (req, res) => {
  try {
    const response = await updateDetails(req.body);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.get("/feedback", async (req, res) => {
  try {
    const { id } = req.query;
    const response = await getFeedback(id);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.get("/all-feedbacks", async (req, res) => {
  try {
    const response = await getAllFeedbacks();
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.post("/feedback", async (req, res) => {
  try {
    const response = await saveFeedback(req.body);
    res.json(success(response));
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

module.exports = router;
