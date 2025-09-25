import aboutReducer from "./reducers/aboutReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = {
  product: productReducer.reducer,
  about: aboutReducer.reducer,
};
export default rootReducer;
