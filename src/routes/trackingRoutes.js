const router = require("express").Router();

const trackingController = require('../controllers/trackingController');

router.get('/', trackingController.get);

module.exports = router;