import axios from "axios";

//actionTypes.js
export const GET_DATA = "GET_DATA";
export const DATA_LOADING = "DATA_LOADING";
export const DATA_ERROR = "DATA_ERROR";

//Action Creaters
export const addData = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const data_loading = () => ({
  type: DATA_LOADING,
});

export const data_error = () => ({
  type: DATA_ERROR,
});

export const fetchData = () => async(dispatch) =>{
    dispatch(data_loading())
    axios.get("http://localhost:3001/data").then(({ data }) => {
      dispatch(addData(data));
    })
    .catch((err) =>{
        dispatch(data_error(err));
    })
}
