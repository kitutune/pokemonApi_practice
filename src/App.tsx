// import './App.css';
import { FC, useState } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from 'react-redux';
// import data from '@emoji-mart/data';
// import { flattenObjWithGenerics, obj } from 'hooks/useFlatObject';
import { changeName, incrementAge } from 'stores/PersonSlice';
import store, { RootState } from 'stores/Store';
import { EmojiSetHooked } from 'components/ecosystems/EmojiSetHooked';

// const title = import.meta.env.VITE_APP_TITLE;
// console.dir(import.meta.env);

// console.log('result:', flattenObjWithGenerics(obj));

const App: FC = () => {
  const [counterA, setCounterA] = useState(0);

  const incre = () => {
    setCounterA((pre) => pre + 1);
  };

  const decre = () => {
    setCounterA((pre) => pre - 1);
  };

  const add = () => {
    setCounterA((pre) => pre + 10);
  };

  // return <EmojiSetHooked />;
  // ストアからstate取得
  const person = useSelector((state: RootState) => state.person);
  // dispatch
  const dispatch = useDispatch();

  // フォームの入力値
  const [name, setName] = useState(person.name);

  // dispatchはJSX内で行っている
  return (
    <>
      {' '}
      {counterA}
      <button onClick={incre}>incre</button>
      <button onClick={decre}>decre</button>
      <button onClick={add}>add</button>
      <p>a//////////////////a</p>
      <p>name: {person.name}</p>
      <p>age: {person.age}</p>
      {/* incrementAgeのdispatch */}
      <button onClick={() => dispatch(incrementAge())}>age + 1</button>
      {/* changeNameのdispatch */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(changeName(name))}>change name</button>
    </>
  );
};

export default App;
