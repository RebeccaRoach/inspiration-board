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

  // Modify the Board component to use axios to retrieve card data from the end point, using the board endpoint you configured in the setup requirements.

  const API_URL_BASE = "https://inspiration-board.herokuapp.com/boards/Becca-Jessica/cards"
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then((response) => {        
        const apiCardsList = response.data.map(card => {
          return card;
        });
        console.log(apiCardsList);
        
        
        setCardsList(apiCardsList);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
      });
  }, []);
  
  // console.log(CARD_DATA.cards[0].text);
  // console.log(CARD_DATA);

  const allCards = (cardsList.map((card) => {
    return <Card key={card.card.id} text={card.card.text} emoji={card.card.emoji}/>
  }))
  

  return (
    <div className="board">
      {allCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
