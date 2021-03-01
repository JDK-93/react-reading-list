import React, { useContext, useReducer, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { BooksContext } from "../hooks/BooksContext";
import { authReducer } from "../hooks/booksReducer";

import { Navigation } from "../components/Navigation";
import { ReadScreen } from "../pages/ReadScreen";
import { WishScreen } from "../pages/WishScreen";

const init = () => {
  return JSON.parse(localStorage.getItem("books")) || [];
};

export const AuthRoutes = () => {
  const { user } = useContext(AuthContext);
  const [books, dispatch] = useReducer(authReducer, [], init);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      <div className="h-screen w-screen JDKFondo2 overflow-x-hidden">
        <div className="md:h-1/6 h-1/12 w-screen  bg-uno shadow-2xl">
          <Navigation isAuthenticated={user.logged} />
        </div>
        <div className="h-5/6 w-screen flex flex-col content-center justify-center">
          <Switch>
            <Route exact path="/wishes" component={WishScreen} />
            <Route exact path="/read" component={ReadScreen} />
            <Redirect to="/wishes" />
          </Switch>
        </div>
      </div>
    </BooksContext.Provider>
  );
};
