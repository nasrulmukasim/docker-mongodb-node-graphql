const { User } = require('../../../models/user');

module.exports.Query = {
  getUsers: async () => {
    const users = User.find({});
    return users;
  },
};

module.exports.Mutation = {
  createUser: async (root, args) => {
    const newUser = new User(args);
    newUser.save(() => newUser);
    return newUser;
  },
};
