import { combineReducers } from "redux";
import * as types from "./types";

const initialCarsState = {
  cars: [],
  car: {
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
  loading: true,
  error: null,
};

const carsReducer = (state = initialCarsState, action) => {
  switch (action.type) {
    case types.GET_CARS:
      if (action.error) {
        return { ...state, loading: false, error: action.payload, cars: [] };
      } else {
        return {
          ...state,
          loading: false,
          cars: action.payload,
          error: false,
        };
      }
    case types.GET_CAR:
      if (action.error) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          car: {
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
      } else {
        return { ...state, loading: false, car: action.payload, error: false };
      }
    case types.PUT_CAR:
      if (action.error) {
        return { ...state, loading: false, error: action.payload, cars: [] };
      } else {
        return {
          ...state,
          loading: false,
          cars: state.cars.map((car) =>
            car.id === action.payload.id ? action.payload : car
          ),
          error: false,
        };
      }
    case types.POST_CAR:
      if (action.error) {
        return { ...state, loading: false, error: action.payload, cars: [] };
      } else {
        return {
          ...state,
          loading: false,
          cars: [...state.car, action.payload],
          error: false,
        };
      }
    case types.DELETE_CAR:
      if (action.error) {
        return { ...state, loading: false, error: action.payload, cars: [] };
      } else {
        return {
          ...state,
          loading: false,
          cars: state.cars.filter((car) => car.id !== action.payload),
          error: false,
        };
      }
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const reducers = {
  cars: carsReducer,
};

export default combineReducers(reducers);
