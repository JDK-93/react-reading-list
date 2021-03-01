import React from "react";
import { types } from "../types/types";

export const Book = ({ book, dispatch }) => {
  const handleClickRead = (id) => {
    dispatch({
      type: types.read,
      payload: { id },
    });
  };
  const handleClickDelete = (id) => {
    dispatch({
      type: types.delete,
      payload: { id },
    });
  };
  return (
    <div className="h-48 md:w-96 w-full md:m-4 my-4  p-1 rounded-lg flex flex-row JDKDegradado  ">
      <div
        className="w-4/12 h-full bg-no-repeat bg-center rounded-l-lg"
        style={{ backgroundImage: `url('${book.thumbnail}')` }}
      ></div>
      <div className="w-8/12 h-full justify-between p-4 flex flex-col">
        <div className="w-full text-xl text-left text-cuatro font-medium truncate">
          {book.title}
        </div>
        <div className="w-full text-base text-left text-cuatro font-light truncate">
          {book.authors?.join(", ")}
        </div>
        <div className="w-full p-2 flex justify-end items-center space-x-4 text-cuatro">
          <svg
            className="w-10 h-10 rounded-lg  border-2 border-transparent hover:border-cuatro cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleClickRead(book.id_)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <svg
            className="w-10 h-10 rounded-lg  border-2 border-transparent hover:border-cuatro cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleClickDelete(book.id_)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
