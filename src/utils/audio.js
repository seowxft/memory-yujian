const au_play = new Audio("%PUBLIC_URL%/audio/drop.mp3");
const au_result = new Audio("%PUBLIC_URL%/audio/shuffle.mp3");

function result(sound) {
  let url = `${process.env.PUBLIC_URL}/audio/${sound}.mp3`;
  if (url !== au_result.src) {
    au_result.src = url;
  }
  au_result.currentTime = 0;
  au_result.play();
}

function play(sound) {
  let url = `${process.env.PUBLIC_URL}/audio/${sound}.mp3`;
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
