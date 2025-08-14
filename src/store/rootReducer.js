import { authReducer } from "./reducers/authReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import chatReducer from "./reducers/chatReducer";
import orderReducer from "./reducers/OrderReducer";
import productReducer from "./reducers/productReducer";
import sellerReducer from "./reducers/sellerReducer";

const rootReducer = {
  auth: authReducer.reducer,
  category: categoryReducer.reducer,
  product: productReducer.reducer,
  seller: sellerReducer.reducer,
  chat: chatReducer.reducer,
  order: orderReducer.reducer,
};
export default rootReducer;
