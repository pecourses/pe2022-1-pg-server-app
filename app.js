const { Router } = require('express');
const express = require('express');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

const router = Router();

app.use('/api', router);

// /api/users
router.post('/users', () => {});
router.delete('/users', () => {});

// /api/phones
router.get('/phones', (req, res) => {
  res.status(200).send('OK');
});

//endpoints
// get /api/users?page=1&results=5 - admin
// get /api/users/1                - user
// post /api/users                 - user
// patch /api/users/1              - user
// delete /api/users/1             - user
// get /api/users/1/phones?page=1&results=5 - user

// get /phones?page=1&results=5 - user
// ... admin

app.use(errorHandlers.errorHandler);

module.exports = app;
