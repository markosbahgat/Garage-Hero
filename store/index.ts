import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../slices/auth.slice";
import appReducer from "../slices/app.slice";
import dashboardReducer from "../slices/dashboard.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import apiMiddleware from "./api.middleware";
import { encryptTransform } from "redux-persist-transform-encrypt";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  app: appReducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.NEXT_PUBLIC_SECRET_ENCRYPTION_KEY as string,
      onError: function (error) {
        console.error("Encryption error:", error);
      },
    }),
  ],
  whitelist: ["auth", "dashboard"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
