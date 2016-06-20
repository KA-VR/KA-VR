import apoc from 'apoc';

const getAll = (req, res) => {
  // TODO Get all users from DB
  const users = [];

  apoc.query('MATCH (n:User) return n').exec().then(
    (response) => {
      // loop through & .row each one
      const usersArray = response[0].data;
      for (let i = 0; i < usersArray.length; i++) {
        users.push(usersArray[i].row);
      }
      console.log('usersArray', usersArray);
      // console.log(usersArray[0].row.[0].name);
      console.log('name', usersArray[0].row);
      console.log('success!! users========', users);
    },
    (fail) => {
      console.log('fail is=======', fail);
    }
  );

  return res.status(200).json(users);
};

export default { getAll };
