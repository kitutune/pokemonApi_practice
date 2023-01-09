import { FC } from 'react';
// import data from '@emoji-mart/data'; //サイズが大きいので無くて表示問題ないならない方がいいのかも？
import Picker from '@emoji-mart/react';
import { useEmoji } from 'hooks/useEmoji';
export const EmojiSetHooked: FC = () => {
  const { isShow, printEmoji, switchEmojiList, onEmojiSelect } = useEmoji();

  console.log('hooked:', isShow);

  return (
    <>
      <button
        style={{
          background: ' rgba(255,0,0,0)', // 最後の0で背景透過
          fontSize: '50px',
          padding: 0,
          border: '0px',
        }}
        onClick={switchEmojiList}
      >
        {/* ↓初期値 */}
        &#x1f600;
      </button>
      <p style={{ fontSize: '50px' }}>{printEmoji}</p>
      {isShow ? (
        <Picker
          //   data={data}
          onEmojiSelect={onEmojiSelect}
        />
      ) : null}
    </>
  );
};
