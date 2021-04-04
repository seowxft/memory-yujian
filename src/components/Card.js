import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Card(props) {
  const { bg, onClick, selected, value, flipping, matched } = props;

  function click(e) {
    if (!selected && !matched && !flipping) {
      onClick();
    }
  }

  const classes = classNames({
    card: true,
    [`${bg}`]: true,
    selected,
    flipping,
    matched,
  });

  return (
    <div onClick={click} className={classes}>
      <div className="back"></div>
      <div className="front">
        <p>
          <img
            className="frontimg"
            src={process.env.PUBLIC_URL + value}
            alt="card stim"
            crossOrigin="anonymous"
          />
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  bg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  flipping: PropTypes.bool,
  matched: PropTypes.bool,
  value: PropTypes.string,
};

export default Card;
