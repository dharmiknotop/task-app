const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.deleteTask = async (req, res, next) => {
  const { id } = req.body;

  const deleteItem = await Task.deleteOne({
    _id: id,
  });

  return res
    .status(200)
    .json(FormatResponse.success('deleted task succesfully', { deleteItem }));
};
