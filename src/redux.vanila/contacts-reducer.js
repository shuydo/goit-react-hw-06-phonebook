import { combineReducers } from "redux";
import types from "./contacts-types";

const items = (state = [], { type, payload }) => {
  
  switch (type) {
    case types.ADD:
      // if (
      //   state.some(
      //     ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
      //   )
      // ) {
      //   alert(`${payload.name} is already in contacts`);
      //   return [...state];
      // }
      // if (state.some(({ number }) => number === payload.number)) {
      //   alert(`${payload.number} is already in contacts`);
      //   return [...state];
      // }
      return [...state, payload];

    case types.DEL:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTERchange:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
