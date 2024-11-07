const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = require("../model/ContactDetails");

router.post("/contact", async (req, res) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(422).json("Please add all fields");
  }

  const result = await USER.create({
    name: name,
    email: email,
    mobile: mobile,
    message: message,
  });
  console.log(result);
  return res.status(201).json({ message: "saved successfully" });

  // try {
  //   const user = await new USER({
  //     name: name,
  //     email: email,
  //     mobile: mobile,
  //     message: message,
  //   });

  //   await user.save().then((user) => {
  //     return res.status(201).json({ message: "saved successfully" });
  //   });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ error: error.message || "Something is wrong. Try again later!" });
  // }
});

module.exports = router;
