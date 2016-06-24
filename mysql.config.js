/* eslint-disable no-console */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('KAVR', 'root', '', {
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
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  refreshToken: Sequelize.STRING,
});

// Creates tables upon initialization
sequelize.sync();

module.exports = Users;
