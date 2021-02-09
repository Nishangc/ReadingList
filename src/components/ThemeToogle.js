import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToogle = () => {
  const { toogleTheme } = useContext(ThemeContext);

  return <button onClick={toogleTheme}>Toogle The Theme</button>;
};

export default ThemeToogle;
