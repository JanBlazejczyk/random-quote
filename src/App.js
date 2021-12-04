import { useState, useEffect } from 'react';

import { Button, Quote } from "./Components";

import './App.scss';

function App() {
  const [disablePreviousButton, setDisablePreviousButton] = useState(true);
  const [currentQuote, setCurrentQuote] = useState("");
  const [previousQuotes, setPreviousQuotes] = useState([]);

  const getRandomQuote = () => {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then((response) => response.json())
      .then((data) => data[Math.floor(Math.random() * data.length)])
      .then((quote) => setCurrentQuote(quote))
      .catch((error) => console.error(error));
  }

  const getNewQuote = () => {
    setPreviousQuotes(previousQuotes => [...previousQuotes, currentQuote]);
    getRandomQuote();
    setDisablePreviousButton(false);
  }

  const getPreviousQuote = () => {
    setCurrentQuote(previousQuotes[previousQuotes.length - 1])
    setPreviousQuotes((previousQuotes) => previousQuotes.filter((_, quote) => quote !== previousQuotes.length - 1))
    if (previousQuotes.length === 1) {
      setDisablePreviousButton(true);
    }
  }

  useEffect(() => {
    getRandomQuote();
  }, [])

  return (
    <div className="App">
      <Quote author={currentQuote?.author} quote={currentQuote?.quote} />
      <div className="btn__container">
        <Button previous label="Previous" handleClick={getPreviousQuote} handleDisable={disablePreviousButton} />
        <Button next label="New" handleClick={getNewQuote} />
      </div>
    </div>
  );
}

export default App;
