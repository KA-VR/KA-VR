const getAll = (req, res) => {
  // TODO Get all usrs from DB
  const users = {};
  return res.status(200).json(users);
};

export default { getAll };
