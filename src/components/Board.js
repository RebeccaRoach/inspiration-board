import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// Postman request for getting all boards: https://inspiration-board.herokuapp.com/boards
// array of objects. Each obj has a "boards" key with value as object with k-v pairs
// our board:
// {
//   "board": {
//       "id": 212,
//       "name": "Becca-Jessica"
//   }
// }

const Board = () => {

  const API_URL_BASE = "https://inspiration-board.herokuapp.com/boards/Becca-Jessica/cards"
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const onDelete = (id) => {
    const cardsListCopy = [...cardsList];
    axios.delete("https://inspiration-board.herokuapp.com/cards/" + id)
      .then((response) => {
        for (let i = 0; i < cardsListCopy.length; i++) {
          if (id === cardsListCopy[i].card.id) {
            cardsListCopy.splice(i, 1);
            setCardsList(cardsListCopy);
            return;
          }
        }
        setErrorMessage('');
      })
      .catch((error) => {        
        setErrorMessage("Card ID#" + id + ": " + error.cause);
      });    
  }

  const onAddCard = (card) => {
    const cardsListCopy = [...cardsList];

    axios.post(API_URL_BASE, card)
      .then((response) => {
        console.log(response);
        const id = response.data.card.id;
        const newCard = {
          id: id,
          text: card.text,
          emoji: card.emoji
        }
        cardsListCopy.unshift({"card": newCard });
        setCardsList(cardsListCopy);
        setErrorMessage('');
      })
      .catch((error) => {        
        // setErrorMessage("Card ID#" + id + ": " + error.cause);
      })    
    }
  

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {        
        const apiCardsList = response.data.map(card => {
          return card;
        });
        setCardsList(apiCardsList);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);
  
  const allCards = (cardsList.map((card) => {
    return <Card 
              key={card.card.id}
              id={card.card.id}
              text={card.card.text}
              emoji={card.card.emoji}
              onDelete={onDelete}
            />
  }))
  
  return (
    <div className="board">
      <NewCardForm onAddCard={onAddCard}/>
      {errorMessage ? <ul className="validation-errors-display"><li className="validation-errors-display__list">{errorMessage}</li></ul> : ''}
      {allCards}
    </div>
  )
}

Board.propTypes = {

};

export default Board;
