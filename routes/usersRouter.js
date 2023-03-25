const { Router } = require('express');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(() => {})
  .get((req, res) => res.send('ok'));

usersRouter
  .route('/:id')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(() => {});

module.exports = usersRouter;
