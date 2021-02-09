import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="navbar"
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <h1>My Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
