const _ = require('lodash');

const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

const resolvers = {
  Query: {
    channels: () => {
      return channels;
    }
  },
  Mutation: {
    changeName: (root, { id, name }, context) => {

      const channel = _.find(channels, { id });

      channel.name = name;

      return Promise.resolve(channel);
    },
    addChannel: (root, { name }) => {
      const channel = {
        id: 3,
        name
      };

      channels.push(channel);

      return Promise.resolve(channel);
    }
  },
}

module.exports = { resolvers }
