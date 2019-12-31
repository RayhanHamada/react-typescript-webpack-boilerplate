// Below we provide initial states for each state
// Export each of these state so we could get each state structure which is
// used to determine what field in the returned object's reducers, make it more predictable ! :)
export const counterState = {
  count: 0
};

export const userState = {
  name: "Me",
  age: 20
};

export default {
  ...counterState,
  ...userState
};
