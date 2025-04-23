import { loginUser, verifyOTP } from "@/middlewares/auth.middleware";
import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  isLoading: boolean;
}
const initialState: AuthState = {
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(
      verifyOTP.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(verifyOTP.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyOTP.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
