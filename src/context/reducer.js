const reducer = (state, action) => {
  if (action.type === "SHOW_CART") {
    console.log(state.cartShow);
    return { ...state, cartShow: !state.cartShow };
  }
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  }
  if (action.type === "LOGOUT") {
    return { ...state, user: action.payload };
  }
  if (action.type === "FETCH_DATA") {
    return { ...state, foodItems: action.payload };
  }
};
export default reducer;
