const { Router } = require('express');
const { usersController } = require('../controllers');

// /api/users
const usersRouter = Router();
// onclick <-> HTTPMethod+route

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get((req, res) => res.send('ok'));

// /api/users/1
usersRouter
  .route('/:userId')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;

// const listener = () => {};
// button.addEventListener('click',listener)
