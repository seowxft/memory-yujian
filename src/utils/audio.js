const au_play = new Audio(
  "https://github.com/seowxft/memory-yujian/blob/main/public/audio/drop.mp3"
);
const au_result = new Audio(
  "https://github.com/seowxft/memory-yujian/blob/main/public/audio/shuffle.mp3"
);

function result(sound) {
  let url = `https://github.com/seowxft/memory-yujian/blob/main/public/audio/${sound}.mp3`;
  if (url !== au_result.src) {
    au_result.src = url;
  }
  au_result.currentTime = 0;
  au_result.play();
}

function play(sound) {
  let url = `https://github.com/seowxft/memory-yujian/blob/main/public/audio/${sound}.mp3`;
  if (url !== au_play.src) {
    au_play.src = url;
  }
  au_play.currentTime = 0;
  au_play.play();
}

const audio = {
  play,
  result,
};

export default audio;
