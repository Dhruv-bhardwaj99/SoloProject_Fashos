import { DATA_ERROR, DATA_LOADING, GET_DATA } from "./action";

const initState = {
  finalData: [],
  loading: false,
  error: false,
};

export const dataReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...store, finalData: payload, loading: false };

    case DATA_LOADING:
      return {
        ...store,
        loading: true,
      };

    case DATA_ERROR:
      return {};

    default:
      return store;
  }
};
