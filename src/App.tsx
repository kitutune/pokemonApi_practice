// import './App.css';
import { FC, useCallback, useState } from 'react';
// import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { EmojiSetHooked } from 'components/ecosystems/EmojiSetHooked';

// const title = import.meta.env.VITE_APP_TITLE;
// console.dir(import.meta.env);

const App: FC = () => {
  // const [edata, setEdata] = useState<Emoji>();
  // const [isShow, setIsShow] = useState(false);
  // const targetUnicode =
  //   edata?.unified != null ? `&#x${edata?.unified};` : '&#x231b;';
  // const arrUnicode = Array(targetUnicode);
  // const printEmoji = String.fromCodePoint(
  //   parseInt(arrUnicode[0].replace(/&#x|;/g, ''), 16)
  // );
  // const switchEmojiList = useCallback(() => {
  //   setIsShow((pre) => !pre);
  // }, []);

  // const onEmojiSelect = useCallback((data: Emoji) => {
  //   // console.log(data);
  //   // setUser({ ...user, name: user.name.concat(data.native) });
  //   // openEmojiDrawer();
  //   setEdata(data);
  // }, []);

  // console.log(edata?.unified);

  return <EmojiSetHooked />;
};

export default App;

// const emojiSamole = {
//   id: 'stuck_out_tongue',
//   name: 'Face with Tongue',
//   native: '😛',
//   unified: '1f61b',
//   keywords: [
//     'stuck',
//     'out',
//     'prank',
//     'childish',
//     'playful',
//     'mischievous',
//     'smile',
//   ],
//   shortcodes: ':stuck_out_tongue:',
//   emoticons: [':p', ':-p', ':P', ':-P', ':b', ':-b'],
// };
// type Emoji = typeof emojiSamole;
