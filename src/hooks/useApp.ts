import { useContext } from "react";
import { AppContext, type IAppContext } from "../context/AppContext";

export const useApp = (): IAppContext => {
  const app = useContext(AppContext);

  return app;
};

export default useApp;
