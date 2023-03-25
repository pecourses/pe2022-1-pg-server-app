const { Pool } = require('pg');
const User = require('./user');
const Phone = require('./phone');

const connectionConfig = {
  host: 'localhost',
  port: '5432',
  database: 'phones_sales',
  user: 'postgres',
  password: 'admin',
};

const pool = new Pool(connectionConfig);

pool.connect(err => {
  if (!err) {
    console.log('DB coonnection success!');
  }
});

process.on('beforeExit', () => pool.end());

User.pool = pool;

module.exports = { User, Phone };
