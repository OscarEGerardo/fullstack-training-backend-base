const controller = require('../controllers/channelController');

const resolvers = {
  Query: {
    channels: controller.channels
  },
  Mutation: {
    changeName: controller.changeName,
    addChannel: controller.addChannel
  },
}

module.exports = { resolvers }
