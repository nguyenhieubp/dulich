import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import textFind from "./textFind";
import numberGuests from "./numberGuests";
import user from "./user";
import cart from "./cart";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  // Thêm middleware tùy chỉnh vào đây (nếu cần)
});

const rootReducer = {
  textFind,
  numberGuests,
  user,
  cart,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});

export default store;
