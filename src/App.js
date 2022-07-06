import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [quote, setQuote] = useState(null);
  const random_number = Math.floor((Math.random() * 100) + 1);
  const [randomNumber, setRandomNumber] = useState(random_number);

  const fetchQuote = async () => {
    const url = 'https://type.fit/api/quotes'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      setQuote(data);
    }else{
      console.log('Something went wrong!');
    }
  }

  const generateRandomNumber = () => {
    let range = quote.length;
    let number = Math.floor((Math.random() * range) + 1);
    setRandomNumber(number);
  }

  useEffect(() => {
    fetchQuote();
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="quote-box">
          <div className="quote">
            <div className="quote-body">
              <q className="quote-text">
                {quote && quote[randomNumber].text}
              </q>
            </div>
                {quote && quote[randomNumber].author}
          </div>
          <div className="quote-bottom">
            <button className="new-quote-btn" onClick={generateRandomNumber}>Next Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
