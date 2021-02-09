import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
import BookAddForm from "./BookAddForm";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return books.length ? (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free Time</div>
  );
};

export default Booklist;
