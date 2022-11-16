import * as types from "./types";
import axios from "axios";

const getCars = (cars) => ({
  type: types.GET_CARS,
  payload: cars,
});

const carDeleted = () => ({
  type: types.DELETE_CAR,
});

const carAdded = () => ({
  type: types.ADD_CAR,
});

const carUpdated = () => ({
  type: types.UPDATE_CAR,
});

const carGeted = (car) => ({
  type: types.GET_CAR,
  payload: car,
});

export const setCars = (cars) => {
  return {
    type: types.SET_CARS,
    payload: cars,
  };
};

export const loadCars = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.API_URL}`)
      .then((resp) => {
        dispatch(getCars(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteCar = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.API_URL}/${id}`)
      .then(() => {
        dispatch(carDeleted());
        dispatch(loadCars());
      })
      .catch((error) => console.log(error));
  };
};

export const addCar = (car) => {
  return function (dispatch) {
    axios
      .post(`${process.env.API_URL}`, car)
      .then(() => {
        dispatch(carAdded());
        dispatch(loadCars());
      })
      .catch((error) => console.log(error));
  };
};

export const getCar = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.API_URL}/${id}`)
      .then((res) => {
        dispatch(carGeted(res.data));
        //console.log("res.data:", res.data);
      })
      .catch((error) => console.log(error));
  };
};

export const updateCar = (car, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.API_URL}/${id}`, car)
      .then(() => {
        dispatch(carUpdated());
      })
      .catch((error) => console.log(error));
  };
};
