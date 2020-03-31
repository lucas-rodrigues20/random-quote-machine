import React, { useState, useEffect } from 'react';
import { FaSync, FaTwitter } from 'react-icons/fa';
import './App.css';

import QuotesService from './services/quotes.service';

function App() {

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    loadQuote();
  }, []);

  async function loadQuote() {
    setQuote(null);
    const response = await QuotesService.get('/quotes/random');
    setQuote(response.data);
  }

  return (
    quote ?
      <div 
        id="quote-box" 
        className='box text-center'
      >
        <blockquote className={'blockquote text-center'}>
          <p 
            id="text" 
            className={'mb-0'}
          >{quote.quote}</p>
          <footer 
            id="author" 
            className={'blockquote-footer'}
          >{quote.author}</footer>
        </blockquote>

        <button 
          id="new-quote" 
          onClick={loadQuote} 
          className={'btn btn-sm btn-primary mr-1'}
        >
          <FaSync/> New Quote
        </button>
        <a 
          href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.quote)}" ${encodeURIComponent(quote.author)}`}
          target="_blank"
          id="tweet-quote" 
          className={'btn btn-sm btn-secondary'}
        >
          <FaTwitter /> Tweet Quote
        </a>
      </div>
      :
      <div className="box loading text-center">
        <FaSync size={60} className='fa-spin' />
        <p className='text-muted'>Loading...</p>
      </div>
  );
}

export default App;
