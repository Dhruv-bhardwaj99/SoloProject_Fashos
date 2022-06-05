import { ADD_DATA } from "./action";

const initState = {
  finalData: [],
};

export const dataReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return { ...store, finalData: payload };

    default:
      return store;
  }
};
