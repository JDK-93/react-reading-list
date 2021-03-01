import React, {useContext} from "react";
import { BooksContext } from "../hooks/BooksContext";

import { types } from "../types/types";


export const SearchResultComp = ({ data, reset, setShowForm,setSearchResult }) => {
  const { dispatch } = useContext(BooksContext);

const handleClick = (d) => {
    dispatch({
      type: types.save,
      payload: {
        ...d,
        read:false
      },
    });
    reset()
    setShowForm(false)
    setSearchResult([])
  }

  return (
    <div
      className="cursor-pointer w-full text-sm text-tres rounded-b hover:bg-teal-100 z-40"
      key={data.id}
      onClick={() => handleClick(data)}
    >
      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
        <div className="w-6 flex flex-col items-center">
          <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 mt-1 rounded-full ">
            <img className="rounded-sm" alt="A" src={data.thumbnail} />{" "}
          </div>
        </div>
        <div className="w-full items-center flex">
          <div className="mx-2 -mt-1 truncate">
            {data.title}
            <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-cuatro">
              {data.authors}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
