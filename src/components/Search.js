import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState('programming'); // vN157
  const [results, setResults] = useState([]);
  
  // const [term, setTerm] = useState('');
  // const [termTwo, setTermTwo] = useState('');

  // console.log('I run with every render');

  // useEffect(() => {
    // console.log('my useEffect using example - only');
    // console.log('my useEffect using example - run after render');
    // console.log('my useEffect using example - run after render and at initial render');

  // }, [term])

  // },) // 1
  // }, []) // 2
  // }, [term, termTwo])  // 3
  // useEffect(function, execution)
  // useEffect(arrow-function, '1-nothing', 2-[], 3-[term, term2 ...])
  //* 1-nothing - run at initial render, run after every render
  //* 2-[] - run at initial render
  //* 3-[term, data, data2 ...] - run at initial render, run after every render if data has changed since last render


  // useEffect(  () => {
    //* 1 way - often and easiest to use
    //  const searchWiki = async () => {
    //   await axios.get('first way to use async-await inside useEffect')  
    //  }
    //  searchWiki();

    //* 2
    // (async () => {
    //    await axios.get('second way to use async-await inside useEffect')  
    // })();

    //* 3 whenever we make a request to axios, it gives us back a promise
  //   axios.get('second way to use async-await inside useEffect')
  //     .then((resp) => {
  //       console.log(resp.data);
  //     });
    
  // }, [term])
  //todo: This means whenever we rerender our components and the term has changed, RUN this ARROW Function right here (() => {})
  //* it also means tha we're going to immediately run the ARROW vunction when our components first rendered as well (также)

  console.log('results: ', results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });

      // setResults();
      setResults(data.query.search);
    };

    // if term is an empty string, will NOT search,
    // if TERM has some chars inside, we will do a search 
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500)
    
    // search();

    return () => {
      clearTimeout(timeoutId)
    }

  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button" 
            href={`https:/en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">          
            {result.title}
          </div>
          <span 
            dangerouslySetInnerHTML={{__html: result.snippet}}> 
          </span>
          {/* {result.snippet} */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />

        </div>
      </div>
      <div className=" ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
