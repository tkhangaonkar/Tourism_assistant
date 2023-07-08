import React, { createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = GlobalContext.Provider;

export const GlobalContextConsumer = GlobalContext.Consumer;

export const withGlobalContext = (Component) => {
  const Wrappedcomponent = (newProps) => {
    return (
      <GlobalContextConsumer>
        {(props) => <Component {...props} {...newProps} />}
      </GlobalContextConsumer>
    );
  };
  return Wrappedcomponent;
};
