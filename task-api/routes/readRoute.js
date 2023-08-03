const express = require('express');
const { readTask } = require('../controllers/readController');

const router = express.Router();

router.route('/read').get(readTask);

module.exports = router;
