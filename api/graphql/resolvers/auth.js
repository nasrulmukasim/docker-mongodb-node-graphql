module.exports.Query = {
};

module.exports.Mutation = {
  login: async (root, args) => {
    return {
      // TODO: implement OAuth2 login mechanism here
      token: '123abc',
      expires: 12345,
    };
  },
};
