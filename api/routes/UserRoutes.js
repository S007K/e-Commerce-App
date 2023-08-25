const express = require("express");
const multer = require("multer");
const fs = require("fs");
const bcrypt = require("bcrypt");
const passwordValidator = require("password-validator");
const jwt = require("jsonwebtoken");
const [verifyToken, verifyTokenAdmin] = require("../verification");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "",
    pass: "",
  },
});

const User = require("../models/User");
var schema = new passwordValidator();
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase(1) // Must have uppercase letters
  .has()
  .lowercase(1) // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/users");
  },
  fieldSize: 104857600,
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.post("/", async (req, res) => {
  var data = new User(req.body);
  if (schema.validate(req.body.password)) {
    bcrypt.hash(req.body.password, 12, async (error, hash) => {
      if (error)
        res.send({
          result: "Fail",
          message: "Internal Server Error while Creating Hash Password",
        });
      else {
        data.password = hash;
        try {
          await data.save();
          res.send({
            result: "Done",
            message: "Record is Created!!!",
            data: data,
          });
        } catch (error) {
          if (error.keyValue)
            res
              .status(400)
              .send({ result: "Fail", message: "User Name Must Be Unique" });
          else if (error.errors.name)
            res
              .status(400)
              .send({ result: "Fail", message: error.errors.name.message });
          else if (error.errors.username)
            res
              .status(400)
              .send({ result: "Fail", message: error.errors.username.message });
          else if (error.errors.email)
            res
              .status(400)
              .send({ result: "Fail", message: error.errors.email.message });
          else if (error.errors.phone)
            res
              .status(400)
              .send({ result: "Fail", message: error.errors.phone.message });
          else if (error.errors.password)
            res
              .status(400)
              .send({ result: "Fail", message: error.errors.password.message });
          else
            res
              .status(500)
              .send({ result: "Fail", message: "Internal Server Error" });
        }
      }
    });
  } else {
    res
      .status(400)
      .send({
        result: "Fail",
        message:
          "Invalid Password!!! Password Length Must Be on Minimum 8 and Maximum 100 also include 1 upper case character, 1 lower case character and not include any space",
      });
  }
});

router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    var data = await User.find().sort({ _id: -1 });
    res.send({ result: "Done", total: data.length, data: data });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});

router.get("/:_id", verifyToken, async (req, res) => {
  try {
    var data = await User.findOne({ _id: req.params._id });
    if (data) res.send({ result: "Done", data: data });
    else res.status(404).send({ result: "Fail", message: "No Record Found" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.get("/admin/:_id", verifyTokenAdmin, async (req, res) => {
  try {
    var data = await User.findOne({ _id: req.params._id });
    if (data) res.send({ result: "Done", data: data });
    else res.status(404).send({ result: "Fail", message: "No Record Found" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.put("/:_id", verifyToken, upload.single("pic"), async (req, res) => {
  try {
    var data = await User.findOne({ _id: req.params._id });
    if (data) {
      data.name = req.body.name ?? data.name;
      data.email = req.body.email ?? data.email;
      data.phone = req.body.phone ?? data.phone;
      data.addressline1 = req.body.addressline1 ?? data.addressline1;
      data.addressline2 = req.body.addressline2 ?? data.addressline2;
      data.addressline3 = req.body.addressline3 ?? data.addressline3;
      data.pin = req.body.pin ?? data.pin;
      data.city = req.body.city ?? data.city;
      data.state = req.body.state ?? data.state;
      data.status = req.body.status ?? data.status;

      try {
        if (req.file && data.pic) {
          fs.unlinkSync(`public/users/${data.pic}`);
        }
      } catch (error) {}
      if (req.file) data.pic = req.file.filename;

      await data.save();
      res.send({ result: "Done", message: "Record is Updated!!!" });
    } else res.status(404).send({ result: "Fail", message: "No Record Found" });
  } catch (error) {
    if (error.keyValue)
      res.status(400).send({ result: "Fail", message: "Name Must Be Unique" });
    else
      res
        .status(500)
        .send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.put(
  "/admin/:_id",
  verifyTokenAdmin,
  upload.single("pic"),
  async (req, res) => {
    try {
      var data = await User.findOne({ _id: req.params._id });
      if (data) {
        data.name = req.body.name ?? data.name;
        data.email = req.body.email ?? data.email;
        data.phone = req.body.phone ?? data.phone;
        data.addressline1 = req.body.addressline1 ?? data.addressline1;
        data.addressline2 = req.body.addressline2 ?? data.addressline2;
        data.addressline3 = req.body.addressline3 ?? data.addressline3;
        data.pin = req.body.pin ?? data.pin;
        data.city = req.body.city ?? data.city;
        data.state = req.body.state ?? data.state;
        data.status = req.body.status ?? data.status;

        try {
          if (req.file && data.pic) {
            fs.unlinkSync(`public/users/${data.pic}`);
          }
        } catch (error) {}
        if (req.file) data.pic = req.file.filename;

        await data.save();
        res.send({ result: "Done", message: "Record is Updated!!!" });
      } else
        res.status(404).send({ result: "Fail", message: "No Record Found" });
    } catch (error) {
      if (error.keyValue)
        res
          .status(400)
          .send({ result: "Fail", message: "Name Must Be Unique" });
      else
        res
          .status(500)
          .send({ result: "Fail", message: "Internal Server Error" });
    }
  }
);
router.delete("/:_id", verifyTokenAdmin, async (req, res) => {
  try {
    var data = await User.findOne({ _id: req.params._id });
    try {
      fs.unlinkSync(`public/users/${data.pic}`);
    } catch (error) {}
    await data.deleteOne();
    res.send({ result: "Done", message: "Record is Deleted!!!" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    var data = await User.findOne({ username: req.body.username });
    if (data) {
      if (await bcrypt.compare(req.body.password, data.password)) {
        if (data.role === "Admin") {
          jwt.sign({ data }, process.env.SAULTKEYADMIN, (error, token) => {
            if (error) {
              console.log(error);
              res
                .status(500)
                .send({ result: "Fail", message: "Internal Server Error!!!" });
            } else {
              res.send({ result: "Done", data: data, token, token });
            }
          });
        } else {
          jwt.sign({ data }, process.env.SAULTKEYUSER, (error, token) => {
            if (error) {
              console.log(error);
              res
                .status(500)
                .send({ result: "Fail", message: "Internal Server Error!!!" });
            } else {
              res.send({ result: "Done", data: data, token, token });
            }
          });
        }
      } else
        res
          .status(404)
          .send({
            result: "Fail",
            message: "Username or Password Incorrect!!!",
          });
    } else {
      res
        .status(404)
        .send({ result: "Fail", message: "Username or Password Incorrect!!!" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "Fail", message: "Internal Server Error!!!" });
  }
});

router.post("/forgetpassword-1", async (req, res) => {
  try {
    var data = await User.findOne({ username: req.body.username });
    if (data) {
      var num = parseInt((Math.random() * 1000000) % 1000000);
      data.otp = num;
      await data.save();
      let mailOption = {
        from: "karmadjango@gmail.com",
        to: data.email,
        subject: "OTP for PASSWORD RESET!!! : Team Eshop",
        text: `OTP for Password Reset is ${num}\nTeam Eshop\n`,
      };
      transporter.sendMail(mailOption, (error, data) => {
        if (error) console.log(error);
      });
      res.send({ result: "Done", message: "OTP Sent on Registered Email Id" });
    } else {
      res.status(401).send({ result: "Fail", message: "Invalid Username!!!" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.post("/forgetpassword-2", async (req, res) => {
  try {
    var data = await User.findOne({ username: req.body.username });
    if (data) {
      if (data.otp == req.body.otp) res.send({ result: "Done" });
      else res.status(401).send({ result: "Fail", message: "Invalid OTP" });
    } else {
      res.status(401).send({ result: "Fail", message: "UnAuthrorozed!!!" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
router.post("/forgetpassword-3", async (req, res) => {
  try {
    var data = await User.findOne({ username: req.body.username });
    if (data) {
      if (schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 12, async (error, hash) => {
          if (error)
            res.send({
              result: "Fail",
              message: "Internal Server Error while Creating Hash Password",
            });
          else {
            data.password = hash;
            try {
              await data.save();
              res.send({
                result: "Done",
                message: "Password Has Been Reset!!!",
              });
            } catch (error) {
              res
                .status(500)
                .send({ result: "Fail", message: "Internal Server Error" });
            }
          }
        });
      } else {
        res
          .status(400)
          .send({
            result: "Fail",
            message:
              "Invalid Password!!! Password Length Must Be on Minimum 8 and Maximum 100 also include 1 upper case character, 1 lower case character and not include any space",
          });
      }
    } else {
      res.status(401).send({ result: "Fail", message: "UnAuthrorozed!!!" });
    }
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
});
module.exports = router;
