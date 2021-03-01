import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { searchBook } from "../helpers/books";
import { SearchResultComp } from "../components/SearchResult";

export const BookAdd = ({ showForm, setShowForm }) => {
  const refInput = useRef(null);
  const [searchResult, setSearchResult] = useState([]);

  const [{ bookTitle }, handleInputChange, reset] = useForm({
    bookTitle: "",
  });

  useEffect(() => {
    refInput.current.focus();
  }, [showForm]);

  const handleInput = async (e) => {
    handleInputChange(e);
    let search;
    bookTitle.length > 2
      ? (search = await searchBook(bookTitle))
      : (search = []);
    setSearchResult(search);
  };

  const handleSetShowForm = () => {
    console.log("FFFF", showForm);
    setShowForm(true);
  };

  return (
    <div
      className={`absolute inset-x-0 bottom-0 flex flex-col items-center justify-center pt-4 pb-16 `}
    >
      <div
        className={`w-96 p-2 flex flex-col rounded-xl bg-uno shadow-xl ${
          showForm ? "" : "hidden"
        }`}
      >
        {searchResult?.length > 0 ? (
          <div className={``}>
            {searchResult?.map((result) => (
              <SearchResultComp
                data={result}
                reset={reset}
                setShowForm={setShowForm}
                setSearchResult={setSearchResult}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        <form className={`w-full p-2 ${showForm ? "" : "hidden"}`}>
          <input
            ref={refInput}
            className=" text-base font-thin w-full p-2 bg-dos rounded-xl  "
            type="text"
            name="bookTitle"
            placeholder=""
            autoComplete="off"
            required="true"
            value={bookTitle}
            onChange={handleInput}
          />
        </form>
      </div>

      <div
        className={`h-12 w-12 rounded-full cursor-pointer shadow-xl bg-cuatro ${
          showForm ? "hidden" : ""
        }`}
        onClick={() => handleSetShowForm()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18"
          />
        </svg>
      </div>
    </div>
  );
};
