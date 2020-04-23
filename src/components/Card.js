import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


console.log(emoji.getUnicode("heart_eyes"));

// https://inspiration-board.herokuapp.com/boards/Becca-Jessica/cards?text="Testing card!"&emoji=🤔
// ^^ post request for making new cards

// If post request fails, we get this:
// {
//   "ok": false,
//   "cause": "validation errors",
//   "errors": {
//       "text": [
//           "invalid text or missing emoji"
//       ]
//   }
// }

// access error text = error.errors.text[0]
// "ok" value is false for bad request, true for success

// to update cards, patch request: https://inspiration-board.herokuapp.com/cards/{id}?{newtext}

const Card = (props) => {

  // const emojiToDisplay = emoji.getUnicode(props.emoji);

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        {/* <p className="card__content-emoji">{emojiToDisplay}</p> */}
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
