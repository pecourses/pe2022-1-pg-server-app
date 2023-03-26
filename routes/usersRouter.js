const { Router } = require('express');
const { usersController } = require('../controllers');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(usersController.getUsers);

// /api/users/1
usersRouter
  .route('/:userId')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;

//-------------------------------------------
// onclick <-> HTTPMethod+route
// const listener = () => {};
// button.addEventListener('click',listener)
