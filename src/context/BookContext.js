import React, { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import { bookReducer } from "../reducers/bookReducers";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const data = localStorage.getItem("books");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
