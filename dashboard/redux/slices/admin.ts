import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ADMIN_LOCAL_STORAGE_KEY } from 'constants/index';

const saveJSON = (key: string, data: any) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

const initialUser =
  typeof localStorage !== 'undefined' &&
  localStorage.getItem(ADMIN_LOCAL_STORAGE_KEY)
    ? //@ts-ignore
      JSON.parse(localStorage.getItem(ADMIN_LOCAL_STORAGE_KEY)).admin
    : null;

const initialToken =
  typeof localStorage !== 'undefined' &&
  localStorage.getItem(ADMIN_LOCAL_STORAGE_KEY)
    ? //@ts-ignore
      JSON.parse(localStorage.getItem(ADMIN_LOCAL_STORAGE_KEY)).token
    : null;

export interface UserState {
  admin: any;
  token: string;
}

const initialState: UserState = {
  admin: initialUser || null,
  token: initialToken || null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<any>) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;

      saveJSON(ADMIN_LOCAL_STORAGE_KEY, state);
    },
  },
});

export const { setAdmin } = adminSlice.actions;

export default adminSlice.reducer;
