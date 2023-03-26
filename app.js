const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

// /test/1?page=5
app.get('/test/:testId/users/:userId', (req, res) => {
  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);
  res.send();
});

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
