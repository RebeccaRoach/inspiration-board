import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = props => {

  const [content, setContent] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = event => {
    const contentCopy = {...content};
    contentCopy[event.target.name] = event.target.value;
    setContent(contentCopy);
  }

  const onSubmit = event => {
    event.preventDefault();
    props.onAddCard(content);

    // clear text fields for next submission
    setContent({
      text: "",
      emoji: ""
    });
  }

  return (
    // added onSubmit to form and values to inputs to reflect state
    <div className="new-card-form">
      <form className="new-card-form__form" onSubmit={onSubmit}>
        <header className="new-card-form new-card-form__header">Post a Note</header>
          <label htmlFor="text" className="new-card-form__form-label">Text</label>
          <input
            className="new-card-form__form-textarea"
            type="text"
            name="text"
            placeholder="Your text here"
            value={content.text}
            onChange={onInputChange}
          />
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
          <input
            className="new-card-form__form-textarea"
            type="text"
            name="emoji"
            placeholder="Emoji name"
            value={content.emoji}
            onChange={onInputChange}
          />

          <div>
            {/* changed to input instead of button */}
            <input type="submit" className="new-card-form__form-button" onSubmit={onSubmit}/>
          </div>
      </form>
    </div>
  )
}

NewCardForm.propTypes = {
  onAddCard: PropTypes.func,
};

export default NewCardForm;