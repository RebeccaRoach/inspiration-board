import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = props => {

  const allCards = (props.cardsList.map((card) => {
    return <Card 
              key={card.card.id}
              id={card.card.id}
              text={card.card.text}
              emoji={card.card.emoji}
              onDelete={props.onDelete}
            />
  }));

  return (
    <div className="board">
      {props.errorMessage ? <ul className="validation-errors-display"><li className="validation-errors-display__list">{props.errorMessage}</li></ul> : ''}
      {allCards}
      <NewCardForm onAddCard={props.onAddCard}/>
    </div>
  )
}

Board.propTypes = {
  cardsList: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onAddCard: PropTypes.func.isRequired,
};

export default Board;
