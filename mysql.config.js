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

const Users = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  refreshToken: Sequelize.STRING,
});

sequelize.sync();

module.exports = Users;
