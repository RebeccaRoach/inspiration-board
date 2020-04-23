import React, { Component } from 'react';
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
  // console.log(CARD_DATA.cards[0].text);
  // console.log(CARD_DATA);

  const allCards = (CARD_DATA.cards.map((card) => {
    return <Card text={card.text} emoji={card.emoji}/>
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
