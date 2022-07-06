const express = require("express");
const router = express.Router();

const Shoes = require("../models/data.model");

router.post("", async (req, res) => {
  try {
    const shoes = await Shoes.create(req.body);
    return res.send(shoes);
  } catch (err) {
    return res.status(500).send(er.message);
  }
});

router.get("", async (req, res) => {
  try {
    const shoes = await Shoes.find().lean().exec();
    return res.send(shoes);
  } catch (err) {
    return res.send(500).send(er.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const shoes = await Shoes.findById(req.params.id).lean().exec();
    return res.send(shoes);
  } catch (err) {
    return res.status(500).send(er.message);
  }
});

module.exports = router;