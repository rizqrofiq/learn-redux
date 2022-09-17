const { createStore } = require("redux");

const defaultState = { counter: 0, showCounter: true };

const counterReducer = (state = defaultState, action) => {
  if (action.type === "increment") {
    /**
     * Never mutate existing object.
     * Always create new object whenever updating the data.
     */
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  // Attaching payloads to actions
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrease") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  // Example of working with multiple state
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
