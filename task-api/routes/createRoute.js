const express = require('express');

const { createTask } = require('../controllers/createController');

const router = express.Router();

router.route('/create').post(createTask);

module.exports = router;
