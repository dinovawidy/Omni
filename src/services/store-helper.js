import { configureStore } from "@reduxjs/toolkit";

const generateStoreState = (reducer) => {
  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  return store;
};

const StoreHelper = {
  generateStoreState,
};

export default StoreHelper;
