import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [state, setState] = useState({
    isAuthenticated: false,
  });

  const toogleAuth = () => {
    setState({ ...state, isAuthenticated: !state.isAuthenticated });
  };

  return (
    <AuthContext.Provider value={{ ...state, toogleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
