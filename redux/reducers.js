import { combineReducers } from "redux";
import * as types from "./types";

const initialCarsState = {
  loading: true,
  cars: [],
  car: null,
  carFrame: {
    image: "",
    name: "",
    description: "",
    price: 0,
    contacts: "",
    technical_characteristics: {
      brand: "",
      model: "",
      productionYear: 0,
      body: "",
      mileage: 0,
    },
    options: [],
  },
};

const carsReducer = (state = initialCarsState, action) => {
  switch (action.type) {
    case types.GET_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };

    case types.SET_CARS:
      return { ...state, cars: action.payload, loading: false };

    case types.RESET_CAR:
      return { ...state, car: null, loading: false };

    case types.DELETE_CAR:
      return {
        ...state,
        car: null,
        loading: false,
      };

    case types.ADD_CAR:
      return {
        ...state,
        loading: false,
      };

    case types.GET_CAR:
      return {
        ...state,
        car: action.payload,
        loading: false,
      };

    case types.UPDATE_CAR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

const reducers = {
  cars: carsReducer,
};

export default combineReducers(reducers);
