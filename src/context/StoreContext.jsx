import { createContext } from "react";
import { foodListData } from "../constants/constantData";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValues = {
    foodListData,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
