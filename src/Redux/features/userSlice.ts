import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  accessToken: string | null;
  user: {
    _id: string;
    email: string;
    role: "user" | "admin";
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    image: string;
  } | null;
}
const initialState: IInitialState = {
  accessToken: JSON.parse(localStorage.getItem("accessToken")!) || null,
  user: JSON.parse(localStorage.getItem("user")!) || null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;

      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.accessToken)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
