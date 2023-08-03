const Task = require('../model/taskModel');
const FormatResponse = require('response-format');

exports.createTask = async (req, res, next) => {
  const { title, description, status } = req.body;
  if (title === '' || description === '' || status === '') {
    return res
      .status(200)
      .json(FormatResponse.badRequest('Field not passed properply', {}));
  }
  try {
    const task = await Task.create({
      title,
      description,
      status,
    });

    console.log(req.body);

    return res
      .status(200)
      .json(FormatResponse.success('created task succesfully', { task }));
  } catch (error) {
    console.error(error);
    return res
      .status(200)
      .json(FormatResponse.badRequest('Something went wrong', {}));
  }
};
