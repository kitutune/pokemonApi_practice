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

export const obj = {
  a: 'aa',
  b: 4,
  c: {
    x: 54,
    y: 9,
    z: {
      d: 789,
      e: 'kkkk',
    },
  },
  d: {
    xx: 654,
    yy: 321,
    zz: 789,
  },
  e: ['x', 'y', 'z'],
  f: {},
};
// export const obj = {
//   name: 'John Smith',
//   sku: '20223',
//   price: 23.95,
//   shipTo: {
//     name: 'Jane Smith',
//     address: '123 Maple Street',
//     city: 'Pretendville',
//     state: 'NY',
//     zip: '12345',
//   },
//   billTo: {
//     name: 'John Smith',
//     address: '123 Maple Street',
//     city: 'Pretendville',
//     state: 'NY',
//     zip: '12345',
//   },
// };
