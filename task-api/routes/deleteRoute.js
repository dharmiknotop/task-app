const express = require('express');

const { deleteTask } = require('../controllers/deleteController');

const router = express.Router();

router.route('/delete').post(deleteTask);

module.exports = router;
