import React, { useContext, useState } from "react";
import { BooksContext } from "../hooks/BooksContext";
import { BookAdd } from "../components/BookAdd";
import { Book } from "../components/Book";

export const WishScreen = () => {
  const { books, dispatch } = useContext(BooksContext);
  const [showForm, setShowForm] = useState(false);

  const whish = books.filter((book) => !book.read);

  return (
    <>
      <div
        className="relative w-full h-full flex flex-wrap items-start justify-center overflow-y-auto p-6 pt-16"
        onClick={() => setShowForm(false)}
      >
        {whish.map((book) => (
          <Book book={book} dispatch={dispatch} />
        ))}
      </div>
      <BookAdd showForm={showForm} setShowForm={setShowForm} />
    </>
  );
};
