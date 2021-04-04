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
  "%PUBLIC_URL%/img/1_yujian/1.png",
  "%PUBLIC_URL%/img/1_yujian/2.png",
  "%PUBLIC_URL%/img/1_yujian/3.png",
  "%PUBLIC_URL%/img/1_yujian/4.png",
  "%PUBLIC_URL%/img/1_yujian/5.png",
  "%PUBLIC_URL%/img/1_yujian/6.png",
];

export const images2 = [
  "%PUBLIC_URL%/img/2_zhanying/1.png",
  "%PUBLIC_URL%/img/2_zhanying/2.png",
  "%PUBLIC_URL%/img/2_zhanying/3.png",
  "%PUBLIC_URL%/img/2_zhanying/4.png",
  "%PUBLIC_URL%/img/2_zhanying/5.png",
  "%PUBLIC_URL%/img/2_zhanying/6.png",
];

export const images3 = [
  "%PUBLIC_URL%/img/3_pianfeng/1.png",
  "%PUBLIC_URL%/img/3_pianfeng/2.png",
  "%PUBLIC_URL%/img/3_pianfeng/3.png",
  "%PUBLIC_URL%/img/3_pianfeng/4.png",
  "%PUBLIC_URL%/img/3_pianfeng/5.png",
  "%PUBLIC_URL%/img/3_pianfeng/6.png",
];

export const images4 = [
  "%PUBLIC_URL%/img/4_anyi/1.png",
  "%PUBLIC_URL%/img/4_anyi/2.png",
  "%PUBLIC_URL%/img/4_anyi/3.png",
  "%PUBLIC_URL%/img/4_anyi/4.png",
  "%PUBLIC_URL%/img/4_anyi/5.png",
  "%PUBLIC_URL%/img/4_anyi/6.png",
];

export const images5 = [
  "%PUBLIC_URL%/img/5_zhaohan/1.png",
  "%PUBLIC_URL%/img/5_zhaohan/2.png",
  "%PUBLIC_URL%/img/5_zhaohan/3.png",
  "%PUBLIC_URL%/img/5_zhaohan/4.png",
  "%PUBLIC_URL%/img/5_zhaohan/5.png",
  "%PUBLIC_URL%/img/5_zhaohan/6.png",
];

export const images6 = [
  "%PUBLIC_URL%/img/6_lanzhi/1.png",
  "%PUBLIC_URL%/img/6_lanzhi/2.png",
  "%PUBLIC_URL%/img/6_lanzhi/3.png",
  "%PUBLIC_URL%/img/6_lanzhi/4.png",
  "%PUBLIC_URL%/img/6_lanzhi/5.png",
  "%PUBLIC_URL%/img/6_lanzhi/6.png",
];

export const images7 = [
  "%PUBLIC_URL%/img/7_suifeng/1.png",
  "%PUBLIC_URL%/img/7_suifeng/2.png",
  "%PUBLIC_URL%/img/7_suifeng/3.png",
  "%PUBLIC_URL%/img/7_suifeng/4.png",
  "%PUBLIC_URL%/img/7_suifeng/5.png",
  "%PUBLIC_URL%/img/7_suifeng/6.png",
];

export const images8 = [
  "%PUBLIC_URL%/img/8_yanmo/1.png",
  "%PUBLIC_URL%/img/8_yanmo/2.png",
  "%PUBLIC_URL%/img/8_yanmo/3.png",
  "%PUBLIC_URL%/img/8_yanmo/4.png",
  "%PUBLIC_URL%/img/8_yanmo/5.png",
  "%PUBLIC_URL%/img/8_yanmo/6.png",
];

export const images9 = [
  "%PUBLIC_URL%/img/9_yihan/1.png",
  "%PUBLIC_URL%/img/9_yihan/2.png",
  "%PUBLIC_URL%/img/9_yihan/3.png",
  "%PUBLIC_URL%/img/9_yihan/4.png",
  "%PUBLIC_URL%/img/9_yihan/5.png",
  "%PUBLIC_URL%/img/9_yihan/6.png",
];

export const images10 = [
  "%PUBLIC_URL%/img/10_canyang/1.png",
  "%PUBLIC_URL%/img/10_canyang/2.png",
  "%PUBLIC_URL%/img/10_canyang/3.png",
  "%PUBLIC_URL%/img/10_canyang/4.png",
  "%PUBLIC_URL%/img/10_canyang/5.png",
  "%PUBLIC_URL%/img/10_canyang/6.png",
];

export const images11 = [
  "%PUBLIC_URL%/img/11_senhe/1.png",
  "%PUBLIC_URL%/img/11_senhe/2.png",
  "%PUBLIC_URL%/img/11_senhe/3.png",
  "%PUBLIC_URL%/img/11_senhe/4.png",
  "%PUBLIC_URL%/img/11_senhe/5.png",
  "%PUBLIC_URL%/img/11_senhe/6.png",
];

export const images12 = [
  "%PUBLIC_URL%/img/12_yituo/1.png",
  "%PUBLIC_URL%/img/12_yituo/2.png",
  "%PUBLIC_URL%/img/12_yituo/3.png",
  "%PUBLIC_URL%/img/12_yituo/4.png",
  "%PUBLIC_URL%/img/12_yituo/5.png",
  "%PUBLIC_URL%/img/12_yituo/6.png",
];
