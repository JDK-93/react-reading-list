import React, { useContext } from "react";
import { BooksContext } from "../hooks/BooksContext";

import { Book } from "../components/Book";

export const ReadScreen = () => {
  const { books, dispatch } = useContext(BooksContext);
  const read = books.filter((book) => book.read);
  return (
    <div className="relative w-full h-full flex flex-wrap items-start justify-center overflow-y-auto p-6 pt-16">

      {read.map((book) => (
        <Book book={book} dispatch={dispatch} />
      ))}
    </div>
  );
};
