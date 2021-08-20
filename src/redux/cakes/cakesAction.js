import { BUY_CAKE, BAKE_CAKE } from "./cakesTypes";

export const buyCakes = () => {
  return {
    type: BUY_CAKE,
  };
};

export const bakeCake = () => {
  return {
    type: BAKE_CAKE,
  };
};
