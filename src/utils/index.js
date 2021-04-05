function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// This is for vowels/alphabets

// export function genDeck(items = vowels) {
//   // better than looping
//   let duplicated = items.concat([...items]);
//   // there might be better ways of doing this
//   let shuffled = duplicated.sort(() => Math.random() - 0.5);
//   return shuffled;
// }
//
// export function alphabet(amount = 26) {
//   return [...Array(amount)].map((n, i) => String.fromCharCode(97 + i));
// }
//
// export const vowels = ["a", "e", "i", "o", "u", "y"];

export function genDeckImage(items) {
  // better than looping

  let duplicated = items.concat([...items]);
  let shuffled = shuffleArray(duplicated);
  return shuffled;
}

// urls for the images in each deck chosen
// these images have to be in the public folder
export const images = [
  "/img/1_yujian/1.jpg",
  "/img/1_yujian/2.jpg",
  "/img/1_yujian/3.jpg",
  "/img/1_yujian/4.jpg",
  "/img/1_yujian/5.jpg",
  "/img/1_yujian/6.jpg",
];

export const images2 = [
  "/img/2_zhanying/1.jpg",
  "/img/2_zhanying/2.jpg",
  "/img/2_zhanying/3.jpg",
  "/img/2_zhanying/4.jpg",
  "/img/2_zhanying/5.jpg",
  "/img/2_zhanying/6.jpg",
];

export const images3 = [
  "/img/3_pianfeng/1.jpg",
  "/img/3_pianfeng/2.jpg",
  "/img/3_pianfeng/3.jpg",
  "/img/3_pianfeng/4.jpg",
  "/img/3_pianfeng/5.jpg",
  "/img/3_pianfeng/6.jpg",
];

export const images4 = [
  "/img/4_anyi/1.jpg",
  "/img/4_anyi/2.jpg",
  "/img/4_anyi/3.jpg",
  "/img/4_anyi/4.jpg",
  "/img/4_anyi/5.jpg",
  "/img/4_anyi/6.jpg",
];

export const images5 = [
  "/img/5_zhaohan/1.jpg",
  "/img/5_zhaohan/2.jpg",
  "/img/5_zhaohan/3.jpg",
  "/img/5_zhaohan/4.jpg",
  "/img/5_zhaohan/5.jpg",
  "/img/5_zhaohan/6.jpg",
];

export const images6 = [
  "/img/6_lanzhi/1.jpg",
  "/img/6_lanzhi/2.jpg",
  "/img/6_lanzhi/3.jpg",
  "/img/6_lanzhi/4.jpg",
  "/img/6_lanzhi/5.jpg",
  "/img/6_lanzhi/6.jpg",
];

export const images7 = [
  "/img/7_suifeng/1.jpg",
  "/img/7_suifeng/2.jpg",
  "/img/7_suifeng/3.jpg",
  "/img/7_suifeng/4.jpg",
  "/img/7_suifeng/5.jpg",
  "/img/7_suifeng/6.jpg",
];

export const images8 = [
  "/img/8_yanmo/1.jpg",
  "/img/8_yanmo/2.jpg",
  "/img/8_yanmo/3.jpg",
  "/img/8_yanmo/4.jpg",
  "/img/8_yanmo/5.jpg",
  "/img/8_yanmo/6.jpg",
];

export const images9 = [
  "/img/9_yihan/1.jpg",
  "/img/9_yihan/2.jpg",
  "/img/9_yihan/3.jpg",
  "/img/9_yihan/4.jpg",
  "/img/9_yihan/5.jpg",
  "/img/9_yihan/6.jpg",
];

export const images10 = [
  "/img/10_canyang/1.jpg",
  "/img/10_canyang/2.jpg",
  "/img/10_canyang/3.jpg",
  "/img/10_canyang/4.jpg",
  "/img/10_canyang/5.jpg",
  "/img/10_canyang/6.jpg",
];

export const images11 = [
  "/img/11_senhe/1.jpg",
  "/img/11_senhe/2.jpg",
  "/img/11_senhe/3.jpg",
  "/img/11_senhe/4.jpg",
  "/img/11_senhe/5.jpg",
  "/img/11_senhe/6.jpg",
];

export const images12 = [
  "/img/12_yituo/1.jpg",
  "/img/12_yituo/2.jpg",
  "/img/12_yituo/3.jpg",
  "/img/12_yituo/4.jpg",
  "/img/12_yituo/5.jpg",
  "/img/12_yituo/6.jpg",
];
