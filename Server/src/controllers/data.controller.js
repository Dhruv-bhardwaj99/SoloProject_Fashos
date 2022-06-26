const express = require("express");
const router = express.Router();

const Data = require("../models/data.models");

router.post("", async (req, res) => {
  try {
    const shoes = await Data.create(req.body);
    return res.send(shoes);
  } catch (err) {
    return res.status(500).send(er.message);
  }
});

router.get("", async (req, res) => {
  try {
    const shoes = await Data.find().lean().exec();
    return res.send(shoes);
  } catch (err) {
    return res.send(500).send(er.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const shoes = await Data.findById(req.params.id).lean().exec();
    return res.send(shoes);
  } catch (err) {
    return res.status(500).send(er.message);
  }
});

module.exports = router;
