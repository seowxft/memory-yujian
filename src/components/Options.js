import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import PropTypes from "prop-types";

function Options(props) {
  const { children, start, bg, soundToggle } = props;

  var soundOn = children[1];
  const toggle = soundOn ? "On" : "Off";

  return (
    <main className={"app " + bg}>
      <Header />
      <nav>
        <button onClick={start}>
          <FontAwesomeIcon icon={faPlay} />
          Play
        </button>
        <button onClick={soundToggle}>
          <FontAwesomeIcon icon={soundOn ? faVolumeUp : faVolumeMute} />
          {toggle}
        </button>
        <a
          className="button"
          href="https://www.instagram.com/tysunkete/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
          IG
        </a>
      </nav>
      <ul className="deck options fadein">{children}</ul>
    </main>
  );
}

Options.propTypes = {
  start: PropTypes.func.isRequired,
  soundToggle: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  bg: PropTypes.string.isRequired,
};

export default Options;
