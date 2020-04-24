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
  }

  return (
    <form className="new-card-form" >
      <header className="new-card-form new-card-form__header">Post a Note</header>
      <div className="new-card-form__form">
        <label htmlFor="text" className="new-card-form__form-label">Text</label>
        <input
          className="new-card-form__form-textarea"
          type="text"
          name="text"
          placeholder="Your text here"
          onChange={onInputChange}
        ></input>
        
        <label htmlFor="emoji" className="new-card-form__form-label">Emoji</label>
        <input
          className="new-card-form__form-textarea"
          type="text"
          name="emoji"
          placeholder="Emoji name"
          onChange={onInputChange}
        ></input>

        <div>
          <button className="new-card-form__form-button" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </form>
  )
}

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;