import React, { useEffect } from 'react';
import './App.css';
import './fonts/AdineKirnberg.ttf';

function App() {

  useEffect(()=>{
    generate()
  },[]);

  const [quote, setQuote] = React.useState('Quote');
  const [author, setAuthor] = React.useState('Author');

  async function generate(){
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes');
    const data = await response.json();
    setQuote(data[Math.floor(Math.random()*(data.length-1))].text);
    setAuthor(data[Math.floor(Math.random()*(data.length-1))].author);
  }

  return (
    <div className="App">
      <div className="quote-block">
        <p className="quote">{quote}</p>
        <p className="author">-{author}</p>
      </div>
      <button className="btn" onClick={generate}>New Quote</button>
    </div>
  );
}

export default App;
