import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faRedo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import audio from "../utils/audio";
import Header from "./Header";
import PropTypes from "prop-types";
import useOptions from "../utils/useOptions";

function Finish(props) {
  const [soundOn] = useOptions();

  useEffect(() => {
    if (soundOn) {
      audio.play("cheer");
    }
  }, []);

  const { bg, errors, stop, start, seconds } = props;
  const time = errors > 1 ? "times" : "time";

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
    <div className={"finish " + bg}>
      <div className="content">
        <Header />
        <h3>
          Congrats!&nbsp;
          <span aria-label="clap" role="img">
            👏👏👏
          </span>
        </h3>
        <p>
          You only missed <strong>{errors}</strong> {time}!<br></br>
          You took&nbsp;
          <strong>
            {secs}s {msec}ms
          </strong>
          &nbsp;in total.
        </p>
        <nav>
          <button onClick={start}>
            <FontAwesomeIcon icon={faRedo} />
            Restart
          </button>
          <button onClick={stop}>
            <FontAwesomeIcon icon={faSlidersH} />
            Options
          </button>
          <a className="button" href="https://github.com/seowxft/">
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
          <br></br>
        </nav>
      </div>
    </div>
  );
}

Finish.propTypes = {
  bg: PropTypes.string.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  errors: PropTypes.number,
  seconds: PropTypes.number,
};

export default Finish;
