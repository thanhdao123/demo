import * as rabbitServices from "services/rabbit.services";

export const Mutation = {
  async publishTask(_, { message }) {
    await rabbitServices.publishTask(message);
    return true;
  }
};
