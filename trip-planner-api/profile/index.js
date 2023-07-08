var express = require("express");
var router = express.Router();
var { error } = require("../response");
const { updateDetails, resetPassword } = require("./services");

router.put("/", async (req, res) => {
  try {
    const response = await updateDetails(req.body);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

router.put("/reset", async (req, res) => {
  try {
    const response = await resetPassword(req.body);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json(error());
  }
});

module.exports = router;
