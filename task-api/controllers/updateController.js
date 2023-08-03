const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.updateTask = async (req, res, next) => {
  const { id, title, description, status } = req.body;

  const deleteItem = await Task.updateOne(
    {
      _id: id,
    },
    { $set: { title, description, status } }
  );

  return res
    .status(200)
    .json(FormatResponse.success('updated task succesfully', { deleteItem }));
};
