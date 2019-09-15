const pubsub = require("configs/pubsub.config");

const activePersonController = makeActivePersonController();

const SOMETHING_CHANGE = "something change";

const Mutation = {
  addOneActivePerson(_, { id }) {
    activePersonController.addOne(id);
    pubsub.publish(SOMETHING_CHANGE, {
      subscribeToActivePersonList: activePersonController.get()
    });
    return true;
  },
  removeOneActivePerson(_, { id }) {
    activePersonController.removeOne(id);
    pubsub.publish(SOMETHING_CHANGE, {
      subscribeToActivePersonList: activePersonController.get()
    });
    return true;
  }
};

const Subscription = {
  subscribeToActivePersonList: {
    subscribe: () => pubsub.asyncIterator([SOMETHING_CHANGE])
  }
};

function makeActivePersonController() {
  let activePersions = [];

  return {
    addOne(id) {
      activePersions = [...activePersions, id];
    },
    removeOne(id) {
      activePersions = activePersions.filter(_id => id !== _id);
    },
    get() {
      return activePersions;
    }
  };
}

module.exports = { Mutation, Subscription };
