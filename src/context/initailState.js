export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  return userInfo;
};
const userInfo = fetchUser();

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
const fooditems = fetchCart();
export const initialState = {
  user: userInfo,
  foodItems: fooditems,
  cartShow: false,
  cartItems: 5,
};
