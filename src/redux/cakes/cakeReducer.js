import { BUY_CAKE, BAKE_CAKE } from "./cakesTypes";

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case BAKE_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };

    default:
      return state;
  }
};

export default reducer;
