export {};
// 色の用意。色の名前とRGBそれぞれの数値をオブジェクトに格納
const red: { [s: string]: number | string } = {
  name: 'red',
  r: 219,
  g: 53,
  b: 86,
};
const green: { [s: string]: number | string } = {
  name: 'green',
  r: 2,
  g: 152,
  b: 142,
};
const grey: { [s: string]: number | string } = {
  name: 'grey',
  r: 151,
  g: 175,
  b: 189,
};
const navy: { [s: string]: number | string } = {
  name: 'navy',
  r: 63,
  g: 73,
  b: 133,
};
const lavender: { [s: string]: number | string } = {
  name: 'lavender',
  r: 211,
  g: 184,
  b: 224,
};
const pink: { [s: string]: number | string } = {
  name: 'pink',
  r: 253,
  g: 183,
  b: 192,
};
const yellow: { [s: string]: number | string } = {
  name: 'yellow',
  r: 255,
  g: 234,
  b: 129,
};
const orange: { [s: string]: number | string } = {
  name: 'orange',
  r: 253,
  g: 143,
  b: 90,
};
const pailGreen: { [s: string]: number | string } = {
  name: 'pailGreen',
  r: 184,
  g: 231,
  b: 195,
};

// 型として `{}` を使ってはいけません。`{}` は実際には「非nullの任意の値」を意味します。
// - もし「任意のオブジェクト」という意味の型が欲しいのであれば、おそらく代わりに `Record<string, unknown>` を使うでしょう。
// - もし「任意の値」という意味の型が欲しいのであれば、おそらく代わりに `unknown` が欲しいでしょう。
// - もし "空のオブジェクト "という意味の型が欲しいのであれば、おそらく代わりに `Record<string, never>` が欲しいでしょう。

/**
 * @use https://note.com/narell/n/n9bce754540bd
 */

// 配列に格納
const colorArray: Record<string, unknown>[] = [
  red,
  green,
  grey,
  navy,
  lavender,
  pink,
  yellow,
  orange,
  pailGreen,
];

// 確認
console.log(colorArray);
