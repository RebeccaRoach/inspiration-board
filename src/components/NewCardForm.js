import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const [content, setContent] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = (event) => {
    const contentCopy = {...content};

    contentCopy[event.target.name] = event.target.value;
    setContent(contentCopy);
  }

  const onClickTest = (event) => {
    event.preventDefault();
    console.log("Hello!");
    props.onAddCard(content);
  }

  return (
    <form className="new-card-form" >
      <header className="new-card-form__header">Post a Note</header>
      <div className="new-card-form__form">
        <label htmlFor="text">Text</label>
        <input type="text" name="text" onChange={onInputChange}></input>

        <label htmlFor="emoji">Emoji</label>
        <input type="text" name="emoji" onChange={onInputChange}></input>

        <div>
          <button className="new-card-form__form-button" onClick={onClickTest}>Submit</button>
        </div>
      </div>
    </form>
  )


}

export default NewCardForm