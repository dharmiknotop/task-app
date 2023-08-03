const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.deleteTask = async (req, res, next) => {
  const { id } = req.body;

  if (id === '') {
    return res
      .status(200)
      .json(FormatResponse.badRequest('Id must be passed', {}));
  }

  try {
    const deleteItem = await Task.deleteOne({
      _id: id,
    });

    return res
      .status(200)
      .json(FormatResponse.success('deleted task succesfully', { deleteItem }));
  } catch (error) {
    console.error(error);
    return res
      .status(200)
      .json(FormatResponse.badRequest('Something went wrong', {}));
  }
};
