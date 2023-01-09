import { configureStore } from '@reduxjs/toolkit';
import {
  initialState as personInitialState,
  PersonReducer,
} from './PersonSlice';

export class RootState {
  person = personInitialState;
}

const reducer = {
  person: PersonReducer,
};

const store = configureStore({
  reducer,
});

export default store;
