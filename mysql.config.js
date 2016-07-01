/* eslint-disable no-console */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('KAVR', 'root', 'pass', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Mysql connection is successful!');
  })
  .catch((err) => {
    console.log('Unable to connect to mysql database. Error is:', err);
  });

const Users = sequelize.define('users', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  refreshToken: Sequelize.STRING,
});

// Creates tables upon initialization
Users.sync();

module.exports = Users;
