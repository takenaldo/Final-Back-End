const express = require("express");
const Store = require("../models/nonnaRossa");
const Sequelize = require("sequelize");

const router = express.Router();

router
  .get("/", async (req, res) => {
    await Store.findAll()
      .then((store) => {
        res.status(200).json(store);
      })
      .catch((err) => {
        console.log("Store Err : ", err);
        res.status(404);
        
      });
  })
  .get("/:data", async (req, res) => {
    let { data } = req.params;

    let lookupValue = data.toLowerCase();

    await Store.findAll({
      where: {
        postalCode: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("postalCode")),
          "LIKE",
          "%" + lookupValue + "%"
        ),
      },
    })
      .then((store) => {
        res.status(200).json(store);
      })
      .catch((err) => {
        console.log("Store Err : ", err);
        res.status(404);
      });
  });

module.exports = router;
