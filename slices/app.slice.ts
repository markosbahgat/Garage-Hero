import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  showSidebar: boolean;
}
const initialState: AppState = {
  showSidebar: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;
export const appState = (state: RootState) => state.app;
export default appSlice.reducer;
