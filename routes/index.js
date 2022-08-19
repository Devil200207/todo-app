const express = require('express');

const router = express.Router();

const homecontoller = require('../controllers/home_controller');

router.get('/',homecontoller.home);

module.exports = router;