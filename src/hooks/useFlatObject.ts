// interface anyObject {
//    [prop: string]: any; // これを記述することで、どんなプロパティでも持てるようになる
// }

// その１
type anyObject = Record<string, any>;

type useFlatObjectReturnType = {
  makeFlatObject: (preobj: anyObject, parentProperty?: string) => anyObject;
};

export const useFlatObject = (): useFlatObjectReturnType => {
  const makeFlatObject = (preobj: anyObject, parentProperty?: string) => {
    // const [flatObject, setFlatObject] = useState<Object>({});
    const initialObject = {};

    const makeObject: anyObject = Object.entries(preobj).reduce(
      // previousValue 前回の値、または初期値、初期値（今回だとinitialObjectが用意されていなければreduceに渡された配列の０番目になる）
      // currentValue 現在の値
      // index 配列の何番目か 0からスタート
      // origin reduceに渡された配列そのもの なのでここは変化はしない
      (previousValue, currentValue, index, origin) => {
        // const currentKey  = currentValue[0]
        // const currentValue  = currentValue[0]
        // ↓↓↓↓↓↓↓↓↓ 確認用のログ
        console.log(
          'pre:',
          previousValue,
          'cur:',
          currentValue,
          'index:',
          index,
          'origin:',
          origin
        );
        console.log(
          'isObjct',
          currentValue[1],
          typeof currentValue[1] === 'object'
        );
        console.log(
          typeof currentValue[1] === 'object' ? 'retry' : 'addObjct',
          { [currentValue[0]]: currentValue[1] }
        );
        // console.log("whatType?:", typeof currentValue[1]);
        console.log('現在の値のvalueの型は?:', typeof currentValue[1]);
        // console.log("whatValue?:", currentValue[1]);
        console.log('現在の値のvalueは?:', currentValue[1]);
        // console.log("whatValueLength?:", Object.keys(currentValue[1]).length);
        // console.log("現在の値をオブジェクトとみなした場合、要素数は?:", Object.keys(currentValue[1]).length); //数字は0になるので要素の値がobjectだった場合にのみ条件として使う
        // console.log("whatProperty?:", currentValue[0]);
        console.log('現在の値のkeyは何てプロパティ名?:', currentValue[0]);
        // console.log("whatparentProperty?:", parentProperty);
        console.log(
          '親のプロパティ名があるならなんてプロパティ名?:',
          parentProperty
        );
        // console.log("whatCurrent:", currentValue);
        console.log('現在の値は？:', currentValue); // Object.entriesで渡してきているので[key,value]と言う形で来ている なのでvalueを参照するときはcurrentValue[1]をkeyを参照するときはcurrentValue[0]としている
        // ↑↑↑↑↑↑↑↑↑ 確認用のログ
        const result =
          // 現在の値のvalueがobjectか？
          typeof currentValue[1] === 'object'
            ? // objectの場合、その中身は空ではないか？
              Object.keys(currentValue[1]).length === 0
              ? // 空の場合はvalueに当たる部分が無いとkeyも消されてしまうのでvalueにundefinedを入れてkeyが消えないように保持する
                {
                  ...previousValue,
                  ...{
                    [`${
                      parentProperty !== undefined
                        ? parentProperty + '_' + currentValue[0]
                        : currentValue[0]
                    }`]: undefined,
                  },
                }
              : {
                  // からじゃ無い場合は中身のあるobjectなのでmakeFlatObjectに渡してネストした要素がフラットになるまで何回でも回す
                  ...previousValue,
                  ...makeFlatObject(currentValue[1], currentValue[0]),
                }
            : {
                // そもそもobjectじゃない場合、純粋な値のはずなので{key:value}という形になるように整えて前回の値（作成しているflatなobject）に追加する
                ...previousValue,
                ...{
                  [`${
                    parentProperty !== undefined
                      ? parentProperty + '_' + currentValue[0]
                      : currentValue[0]
                  }`]: currentValue[1],
                },
              };
        console.log('result:', result);

        return result;
      },
      // initialObject 初期値 ここに引数を用意しなければreduceに渡された配列の０番目になる 一番最初のpreviousValueに入る値
      initialObject
    );

    return makeObject;
  };
  console.log('result', makeFlatObject(obj));

  return { makeFlatObject };
};

// その２
export const flattenObjWithGenerics = <T extends Record<string, unknown>>(
  obj: T,
  prefix = ''
): Record<string, unknown> => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      Object.assign(
        acc,
        flattenObjWithGenerics(obj[k] as Record<string, unknown>, pre + k)
      );
    } else {
      Object.assign(acc, { [pre + k]: obj[k] });
    }

    return acc;
  }, {});
};

// export const obj = {
//   a: 'aa',
//   b: 4,
//   c: {
//     x: 54,
//     y: 9,
//     z: {
//       d: 789,
//       e: 'kkkk',
//     },
//   },
//   d: {
//     xx: 654,
//     yy: 321,
//     zz: 789,
//   },
//   e: ['x', 'y', 'z'],
//   f: {},
// };
export const obj = {
  name: 'John Smith',
  sku: '20223',
  price: 23.95,
  shipTo: {
    name: 'Jane Smith',
    address: '123 Maple Street',
    city: 'Pretendville',
    state: 'NY',
    zip: '12345',
  },
  billTo: {
    name: 'John Smith',
    address: '123 Maple Street',
    city: 'Pretendville',
    state: 'NY',
    zip: '12345',
  },
};

export const makeFlatObject = (
  preobj: Record<string, unknown>,
  parentProperty?: string
): Record<string, unknown> => {
  const initialObject = {};

  const makeObject: Record<string, unknown> = Object.entries(preobj).reduce(
    (previousValue, currentValue, _index, _origin) => {
      const result =
        // 現在の値のvalueがobjectか？
        typeof currentValue[1] === 'object'
          ? // objectの場合、その中身は空ではないか？
            Object.keys(currentValue[1] as Record<string, unknown>).length === 0
            ? // 空の場合はvalueに当たる部分が無いとkeyも消されてしまうのでvalueにundefinedを入れてkeyが消えないように保持する
              {
                ...previousValue,
                ...{
                  [`${
                    parentProperty !== undefined
                      ? parentProperty + '_' + currentValue[0]
                      : currentValue[0]
                  }`]: undefined,
                },
              }
            : {
                // からじゃ無い場合は中身のあるobjectなのでmakeFlatObjectに渡してネストした要素がフラットになるまで何回でも回す
                ...previousValue,
                ...makeFlatObject(
                  currentValue[1] as Record<string, unknown>,
                  currentValue[0]
                ),
              }
          : {
              // そもそもobjectじゃない場合、純粋な値のはずなので{key:value}という形になるように整えて前回の値（作成しているflatなobject）に追加する
              ...previousValue,
              ...{
                [`${
                  parentProperty !== undefined
                    ? parentProperty + '_' + currentValue[0]
                    : currentValue[0]
                }`]: currentValue[1],
              },
            };
      console.log('result:', result);

      return result;
    },
    // initialObject 初期値 ここに引数を用意しなければreduceに渡された配列の０番目になる 一番最初のpreviousValueに入る値
    initialObject
  );

  return makeObject;
};
