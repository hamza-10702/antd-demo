import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './features/toDoSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { toDoApi } from "./services/post";

export const store = configureStore({
  reducer: {
    [toDoApi.reducerPath]: toDoApi.reducer,
    toDo : toDoReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDoApi.middleware),
    
});

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
