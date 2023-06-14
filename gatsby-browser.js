import * as React from "react";
import AppProvider from "./src/context/AppContext";

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
);
