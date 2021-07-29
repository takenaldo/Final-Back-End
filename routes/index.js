const express = require("express");
const router = express.Router();
const store = require("./store");
const burgerking = require("./burgerking");
const nonnarossa = require("./nonnarossa");
const kfc = require("./kfc");
const perihut = require("./perihut");
const user = require("./user");
const order = require("./order");
const kebabchoice = require("./kebabchoice");

router.use("/stores", store);
router.use("/burgerkings", burgerking);
router.use("/nonnarossas", nonnarossa);
router.use("/kfcs", kfc);
router.use("/perihuts", perihut);
router.use("/kebabchoices", kebabchoice)
router.use("/user", user);
router.use("/order", order);


module.exports = router;
