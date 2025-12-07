const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.get('/status', statusController.getStatus);
router.get('/ping', statusController.getPing);
router.get('/', statusController.getStatus);

module.exports = router;
