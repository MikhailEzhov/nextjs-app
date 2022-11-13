import * as types from "./types";
import axios from "axios";

export const getCars = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}`);
    dispatch({ type: types.GET_CARS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_CARS,
      payload: "Something went wrong",
      error: true,
    });
  }
};

export const getCar = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/${id}`);
    dispatch({ type: types.GET_CAR, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_CAR,
      payload: "Something went wrong",
      error: true,
    });
  }
};

export const postCar = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.API_URL}`, data);
    dispatch({ type: types.POST_CAR, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.POST_CAR,
      payload: "Something went wrong",
      error: true,
    });
  }
};

export const putCar = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.API_URL}/${data.id}`, data);
    dispatch({ type: types.PUT_CAR, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.PUT_CAR,
      payload: "Something went wrong",
      error: true,
    });
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_LOADING, payload: true });
    await axios.delete(`${process.env.API_URL}/${id}`);
    dispatch({ type: types.DELETE_CAR, payload: id });
  } catch (error) {
    dispatch({
      type: types.DELETE_CAR,
      payload: "Something went wrong",
      error: true,
    });
  }
  dispatch({ type: types.SET_LOADING, payload: false });
};

export const setLoading = (status) => {
  return {
    type: types.SET_LOADING,
    payload: status,
  };
};
