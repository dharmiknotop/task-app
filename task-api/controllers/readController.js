const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.readTask = async (req, res, next) => {
  const tasks = await Task.find();

  return res
    .status(200)
    .json(FormatResponse.success('created task succesfully', { tasks }));
};

exports.readOneTask = async (req, res, next) => {
  console.log(req.body);

  const { id } = req.body;

  const tasks = await Task.findOne({ _id: id });

  return res.status(200).json(FormatResponse.success('sucess', { tasks }));
};
