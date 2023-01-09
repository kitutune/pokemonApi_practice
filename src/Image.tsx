import { FC, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { flatObj } from 'copy';
import { Pokemon } from 'pokemon';

const BACK = 'back_default';

export const Image: FC = () => {
  const [res, setRes] = useState<Pokemon>();
  // const [image, setImage] = useState();
  useEffect(() => {
    console.log('render_useEffect');

    // console.log('kkkkk', flatObj(obj));

    const getUser = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/25');
      console.log(response?.data);
      setRes(response.data as Pokemon);
    };
    void getUser();
  }, []);

  console.log('kkkkk', flatObj(res?.sprites));

  return (
    <>
      <img alt="" src={res?.sprites[`${BACK}`]} />
      <img
        alt=""
        style={{ width: '500px' }}
        src={res?.sprites.other.dream_world.front_default}
      />
    </>
  );
};
