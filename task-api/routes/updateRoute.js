const express = require('express');
const { updateTask } = require('../controllers/updateController');

const router = express.Router();

router.route('/update').post(updateTask);

module.exports = router;
