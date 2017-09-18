const _ = require('lodash');
const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];
// const gateway = require('../helpers/gateway');

module.exports = {
  channels() {
    return Promise.resolve(channels);
  },
  changeName(root, { id, name }, context) {
    const channel = _.find(channels, { id });

    console.log('//////////');
    console.log(context);
    console.log('//////////');

    channel.name = name;

    return Promise.resolve(channel);
  },

  addChannel(root, { name }, context) {
    const channel = {
      id: 3,
      name
    };

    channels.push(channel);

    return Promise.resolve(channel);
  }
}
