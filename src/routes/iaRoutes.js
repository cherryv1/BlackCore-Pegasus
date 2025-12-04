// src/routes/iaRoutes.js
const express = require('express');
const router = express.Router();
const iaController = require('../controllers/iaController');

router.post('/ia/process', iaController.processIA);
router.get('/ia/personality', iaController.getPersonality);

module.exports = router;
