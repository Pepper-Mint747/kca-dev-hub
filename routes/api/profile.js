const express = require("express");
const router = express.Router();

//@route   GET api/profile
//@desc    Profile route
//@access  Private
router.get("/", (req, res) => res.send("Profile Route"));

module.exports = router;