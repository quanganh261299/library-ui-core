import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Import your combined reducer
import { rootReducer } from "./reducers"; // Assuming your combined reducers are in a separate file

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk as any, logger),
});

export default store;
