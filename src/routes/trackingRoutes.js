const router = require("express").Router();

const trackingController = require("../controllers/trackingController");

router.get("/:number", trackingController.get);

module.exports = router;
