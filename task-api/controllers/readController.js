const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.readTask = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    return res
      .status(200)
      .json(FormatResponse.success('created task succesfully', { tasks }));
  } catch (error) {
    console.error(error);
    return res
      .status(200)
      .json(FormatResponse.badRequest('Something went wrong', {}));
  }
};

exports.readOneTask = async (req, res, next) => {
  const { id } = req.body;

  if (id === '') {
    return res
      .status(200)
      .json(FormatResponse.badRequest('Id must be passed', {}));
  }
  try {
    const tasks = await Task.findOne({ _id: id });

    return res.status(200).json(FormatResponse.success('sucess', { tasks }));
  } catch (error) {
    return res
      .status(200)
      .json(FormatResponse.badRequest('Something went wrong', {}));
  }
};
