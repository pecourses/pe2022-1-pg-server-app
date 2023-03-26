const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    res.status(201).send(createdUser);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.deleteById(userId);

    if (deletedUser) {
      return res.status(204).send();
    }

    res.status(404).send('User Not Found');
  } catch (err) {
    next(err);
  }
};
