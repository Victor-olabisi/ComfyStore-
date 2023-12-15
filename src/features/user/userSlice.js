import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  let user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const defaultState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      const data = action.payload;
      // console.log(user);
      const user = { ...data.user, token: data.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      // console.log(user);
    },
    logoutUser: (state) => {
        state.user = null;
        localStorage.removeItem('user')
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
