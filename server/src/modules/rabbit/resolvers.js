const rabbitServices = require("services/rabbit.services");

const Mutation = {
  async publishTask(_, { message }) {
    await rabbitServices.publishTask(message);
    return true;
  }
};

module.exports = { Mutation };
