const express = require('express');
const { readTask, readOneTask } = require('../controllers/readController');

const router = express.Router();

router.route('/read').get(readTask);
router.route('/readOne').post(readOneTask);

module.exports = router;
