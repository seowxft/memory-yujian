import React, { useState } from "react";
import Card from "../components/Card";
import sources from "../utils/sources";
import audio from "../utils/audio";

function useOptions(status = "options") {
  //create option state
  const [options, setOptions] = useState({ bg: sources.bg[0] });
  const [game, setGame] = useState({ status });
  //audio toggle here
  const [soundOn, setsoundOn] = useState(true);

  //on click which card, save that bg
  function cardClick(i) {
    setOptions({ ...options, bg: sources.bg[i] });

    if (soundOn) {
      audio.result("drop");
    }
  }

  const backgrounds = sources.bg.map((bg, i) => (
    <Card
      key={i}
      bg={bg}
      onClick={() => cardClick(i)}
      selected={sources.bg[i] === options.bg}
    />
  ));

  const set = {
    start: () => {
      if (soundOn) {
        audio.result("shuffle");
      }

      setGame({ status: "playing" });
    },
    stop: () => {
      if (soundOn) {
        audio.result("drop");
      }

      setGame({ status: "options" });
    },
    finish: (errors, seconds) => {
      if (soundOn) {
        audio.result("cheer");
      }

      setGame({ status: "finished", errors, seconds });
    },
  };

  const audioToggle = {
    soundToggle: () => {
      setsoundOn(!soundOn);
    },
  };

  // console.log(options); // bg: chosen pic
  // console.log(game); // status: options
  // console.log(set); // functions for start, stop, finish
  // console.log(backgrounds); // bag of card deck

  return [options, game, set, backgrounds, audioToggle, soundOn];
}

export default useOptions;
