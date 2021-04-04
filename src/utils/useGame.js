import React, { useState, useEffect } from "react";
import { genDeckImage } from "./";
import {
  images,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
  images11,
  images12,
} from "./";
import audio from "../utils/audio";
import Card from "../components/Card";

function useGame(bg, children) {
  //this is to toggle audio
  const soundOn = children; // recieve prop regarding sound audioToggle
  // input bg is what card you clicked in the beginning

  //set errors as 0
  //set state to validate matches
  //set state to enable flip if wrong
  const [errors, setErrors] = useState(0);
  const [matches, setMatch] = useState([]);
  const [flipping, setFlip] = useState({ i: [], v: [] });

  //this is a timer
  const [seconds, setSeconds] = useState(0);
  const [prevTime, setPrevTime] = useState(null);
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(60000);

  //toggle the images depending on which deck you choose
  var finalimages;
  if (bg === "casual-yujian") {
    finalimages = images;
  }
  if (bg === "lyb-zhanying") {
    finalimages = images2;
  }
  if (bg === "icefan-pianfeng") {
    finalimages = images3;
  }
  if (bg === "yaoguai-anyi") {
    finalimages = images4;
  }
  if (bg === "dd-zhaohan") {
    finalimages = images5;
  }
  if (bg === "orienody-lanzhi") {
    finalimages = images6;
  }
  if (bg === "ploughdep-suifeng") {
    finalimages = images7;
  }
  if (bg === "lecoup-yanmo") {
    finalimages = images8;
  }
  if (bg === "baituo-yihan") {
    finalimages = images9;
  }
  if (bg === "findyour-canyang") {
    finalimages = images10;
  }
  if (bg === "nightcomet-senhe") {
    finalimages = images11;
  }
  if (bg === "yituo") {
    finalimages = images12;
  }
  //set deck -> this is where the pics for the game come in
  const [deck, setDeck] = useState(genDeckImage(finalimages));

  // if there are two cards open, check if need flip
  useEffect(() => {
    if (flipping.i.length === 2) {
      checkFlip(flipping);
    }
  }, [flipping]);

  // if cards are the same, set as matched, leave it flipped
  // if cards are different, set as error, and flip back after ms
  function checkFlip(f) {
    if (f.v[0] === f.v[1]) {
      if (soundOn) {
        audio.result("match");
      }

      setMatch([...matches, f.v[0]]); // keeps note of what has already been matched
      setFlip({ i: [], v: [] }); // reset so that it will flip for the next one
    } else {
      setErrors(() => errors + 1);
      setTimeout(() => {
        if (soundOn) {
          audio.result("error");
        }

        setFlip({ i: [], v: [] });
      }, 500);
    }
  }

  // console.log(matches);
  // console.log(flipping);

  // reshuffle for new game
  function reshuffle() {
    if (soundOn) {
      audio.result("shuffle");
    }

    setFlip({ i: [], v: [] });
    setMatch([]);
    setErrors(0);
    setSeconds(0);
    setTimeInMilliseconds(60000);
    setTimeout(() => setDeck(genDeckImage(finalimages)), 800); //reset deck here
  }

  function cardClick(value, index) {
    const { i, v } = flipping;
    if (i.length < 2) {
      if (soundOn) {
        audio.play("flip");
      }

      setFlip({ i: [...i, index], v: [...v, value] });
    }
  }

  const cards = deck.map((value, i) => (
    <Card
      key={i}
      bg={bg}
      onClick={() => cardClick(value, i)}
      value={value}
      matched={matches.includes(value)}
      flipping={flipping.i.includes(i)}
    />
  ));

  const finished = matches.length === deck.length / 2;

  //this is a timer
  // useEffect(() => {
  //   let interval = null;
  //   if (!finished) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds + 1);
  //     }, 1000);
  //   } else if (finished && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [!finished, seconds]);

  useEffect(() => {
    let interval = null;
    if (!finished) {
      interval = setInterval(() => {
        let prev = prevTime ? prevTime : Date.now();
        let diffTime = Date.now() - prev;
        let newMilliTime = timeInMilliseconds - diffTime;
        setPrevTime(Date.now());
        setTimeInMilliseconds(newMilliTime);
        setSeconds((seconds) => newMilliTime);
        // console.log(seconds);
      }, 1);
    } else if (finished && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [!finished, seconds]);

  // console.log(cards); //vowel properties
  // console.log(reshuffle); //reshuffle function
  // console.log(errors); // number of errors
  // console.log(finished); //true/false

  return [cards, reshuffle, errors, finished, seconds];
}

export default useGame;
