import { createContext, useContext, useReducer } from "react";
import { initialState } from "../context/initailState";
import { getAllFoodItems } from "../firebaseFunctions";
import reducer from "../context/reducer";
export const Context = createContext();
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showCart = () => {
    dispatch({ type: "SHOW_CART" });
    console.log("show");
  };
  const setUser = (userData) => {
    dispatch({ type: "SET_USER", payload: { ...userData } });
  };
  const logout = () => {
    localStorage.clear();

    dispatch({ type: "LOGOUT", payload: null });
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    });
  };

  return (
    <Context.Provider
      value={{ ...state, showCart, setUser, logout, fetchData }}
    >
      {children}
    </Context.Provider>
  );
};
export const useApp = () => {
  return useContext(Context);
};
