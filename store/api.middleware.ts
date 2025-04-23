import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { Action, isAction } from "redux";

interface IAction extends Action {
  payload: { status: number };
}
const apiMiddleware: any =
  (store: MiddlewareAPI<Dispatch<Action>>) =>
  (next: Dispatch<Action>) =>
  (action: IAction) => {
    if (isAction(action)) {
      // Ensures action has a valid type

      if (action.type.endsWith("/pending")) {
        console.log("🚀 API Request Started:", action.type);
      }

      if (action.type.endsWith("/fulfilled")) {
        console.log("✅ API Request Successful:", action.type);
      }

      if (action.type.endsWith("/rejected")) {
        console.error("❌ API Request Failed:", action);
      }
    }

    return next(action);
  };

export default apiMiddleware;
