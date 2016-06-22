/* eslint-disable no-console */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Users', 'root', '', {
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

const User = sequelize.define('user', {
  name: Sequelize.STRING,
});

module.exports = User;
