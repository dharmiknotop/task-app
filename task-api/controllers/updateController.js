const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.updateTask = async (req, res, next) => {
  const { id, title, description, status } = req.body;

  if (id === '' || title === '' || description === '' || status === '') {
    return res
      .status(200)
      .json(FormatResponse.badRequest('Field not passed properply', {}));
  }

  try {
    const deleteItem = await Task.updateOne(
      {
        _id: id,
      },
      { $set: { title, description, status } }
    );

    return res
      .status(200)
      .json(FormatResponse.success('updated task succesfully', { deleteItem }));
  } catch (error) {
    console.error(error);
    return res
      .status(200)
      .json(FormatResponse.badRequest('Something went wrong', {}));
  }
};
