import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PersonState {
  name: string;
  age: number;
}

// 初期値
export const initialState: PersonState = {
  name: 'まんだ　ゆうじろう',
  age: 34,
};

// スライス
const PersonSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    incrementAge(state) {
      state.age++;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

// アクションの切り出し
export const { incrementAge, changeName } = PersonSlice.actions;

// リデューサーの切り出し
export const PersonReducer = PersonSlice.reducer;
