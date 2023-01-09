import { useCallback, useState } from 'react';

type ReturnValue = {
  isShow: boolean;
  printEmoji: string;
  switchEmojiList: () => void;
  onEmojiSelect: (data: Emoji) => void;
};

export const useEmoji = (): ReturnValue => {
  const [edata, setEdata] = useState<Emoji>();
  const [isShow, setIsShow] = useState(false);
  const targetUnicode =
    edata?.unified != null ? `&#x${edata?.unified};` : '&#x231b;';
  const arrUnicode = Array(targetUnicode);
  const printEmoji = String.fromCodePoint(
    parseInt(arrUnicode[0].replace(/&#x|;/g, ''), 16)
  );
  const switchEmojiList = () => {
    setIsShow((pre) => !pre);
  };

  console.log('use:', isShow);
  const onEmojiSelect = useCallback((data: Emoji) => {
    // console.log(data);
    // setUser({ ...user, name: user.name.concat(data.native) });
    // openEmojiDrawer();
    setEdata(data);
  }, []);

  return { isShow, printEmoji, switchEmojiList, onEmojiSelect };
};

const emojiSamole = {
  id: 'stuck_out_tongue',
  name: 'Face with Tongue',
  native: '😛',
  unified: '1f61b',
  keywords: [
    'stuck',
    'out',
    'prank',
    'childish',
    'playful',
    'mischievous',
    'smile',
  ],
  shortcodes: ':stuck_out_tongue:',
  emoticons: [':p', ':-p', ':P', ':-P', ':b', ':-b'],
};
type Emoji = typeof emojiSamole;
