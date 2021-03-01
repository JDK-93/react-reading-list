import { types } from "../types/types";

export const authReducer = (state = [], action) => {
  switch (action.type) {
    case types.save: {
      return [...state, action.payload];
    }

    case types.read: {
      return state.map((book) =>
        book.id_ === action.payload.id ? { ...book, read: !book.read } : book
      );
    }

    case types.delete:
      return state.filter((book) => book.id_ !== action.payload.id);

    default:
      return state;
  }
};
