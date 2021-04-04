import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft, faRandom } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import useGame from "../utils/useGame";
import PropTypes from "prop-types";

function Game(props) {
  const { bg, stop, finish, children } = props;
  const [cards, reshuffle, errors, finished, seconds] = useGame(bg, children);

  useEffect(() => {
    if (finished) finish(errors, seconds);
  }, [finished]);

  // split the millsecond counter into seconds and ms for display
  var sec = 60000 - seconds;
  var msec = parseInt(sec % 1000); //this takes the last 3 digits, aka the ms
  var secs = Math.floor((sec / 1000) % 60);

  if (msec < 10) {
    msec = "00" + msec;
  } else if (msec < 100) {
    msec = "0" + msec;
  }
  secs = secs < 10 ? " " + secs : secs;

  return (
    <main className={"game " + bg}>
      <Header />
      <nav>
        <button onClick={stop}>
          <FontAwesomeIcon icon={faHandPointLeft} />
        </button>
        <span className="errors">
          Errors: <strong>{errors}</strong>
        </span>
        <span className="time">
          Time:&nbsp;
          <strong>
            {secs}s {msec}ms
          </strong>
        </span>
        <button onClick={reshuffle}>
          <FontAwesomeIcon icon={faRandom} />
        </button>
      </nav>
      <div className="deck fadein">{cards}</div>
      {/* <button onClick={() => finish(errors)}>Finish</button> */}
    </main>
  );
}

Game.propTypes = {
  bg: PropTypes.string.isRequired,
  stop: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  children: PropTypes.bool.isRequired,
};

export default Game;
