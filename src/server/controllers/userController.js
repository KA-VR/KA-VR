/* eslint-disable */
import redis from 'redis';

const db = redis.createClient();

const getAll = (req, res) => {
  // TODO Get all users from DB
  let users = {};

  db.get('name', (error, result) => {
    if (error) {
      console.log('error is:', error);
      res.sendStatus(400);
    } else {
      console.log('result is:', result);
      // users.name.push(result);
      users = result;
      res.status(200).json(users);
    }
  });
};

export default { getAll };
