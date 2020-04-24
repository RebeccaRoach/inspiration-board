import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

const App = () => {

  const API_URL_BASE = "https://inspiration-board.herokuapp.com/boards/Becca-Jessica/cards";

  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const onDelete = id => {
    axios.delete("https://inspiration-board.herokuapp.com/cards/" + id)
      .then(() => {
        const cardsListCopy = [...cardsList];
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
        setErrorMessage("Card ID #" + id + ": " + error.cause);
      });    
  }

  const onAddCard = card => {
    axios.post(API_URL_BASE, card)
      .then((response) => {
        const cardsListCopy = [...cardsList];
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
        setErrorMessage("error: " + error.cause);
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
  

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={"Becca-Jessica"}
        cardsList={cardsList} 
        errorMessage={errorMessage} 
        onDelete={onDelete} 
        onAddCard={onAddCard}
      />
    </section>
  );
};

export default App;
