import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

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

  const onDeleteClick = () => {
    props.onDelete(props.id);
  }

  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>

        {/* display emoji if one is defined */}
        { props.emoji ? 
          <p className="card__content-emoji">{emoji.getUnicode(props.emoji)}</p> : null
        }
      </div>
      <button className="card__delete" onClick={onDeleteClick}>X</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default Card;
