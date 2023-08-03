const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.readTask = async (req, res, next) => {
  const tasks = await Task.find();

  return res
    .status(200)
    .json(FormatResponse.success('created task succesfully', { tasks }));
};
