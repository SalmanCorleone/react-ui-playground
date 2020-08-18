import React, { useState } from 'react';
import './App.css';
import Slider from './components/slider/Slider';
import Animated from './components/animated/Animated';

const IMAGES = [
  'https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%201',
  'https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%202',
  'https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%203',
  'https://via.placeholder.com/350x550/DDDDDD/000000/?text=Slide%204',
];

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <header className="App-header">
        {/* <Slider data={IMAGES} /> */}
        <Animated />
      </header>
    </div>
  );
}

export default App;
