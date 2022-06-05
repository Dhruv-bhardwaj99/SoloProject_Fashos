//actionTypes.js
export const ADD_DATA = "ADD_DATA";

//Action Creaters
export const addData = (data) =>({
    type: ADD_DATA,
    payload: data,
});