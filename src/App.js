import React, { useState, useEffect } from 'react';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll';
import Axios from 'axios';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getFakeData = async () => {
      try {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/todos');
        if (res.status) {
          setData(res.data);
        }
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    getFakeData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <HorizontalScroll {...{ data }} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
