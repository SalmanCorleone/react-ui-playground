import React, { useState, useEffect } from 'react';
import '../css/HorizontalScroll.css';

function HorizontalScroll({ data }) {
  const [activeIndex, setActiveIndex] = useState(40);
  const [anim, setAnim] = useState('');

  useEffect(() => {}, [anim]);

  const next = () => {
    setAnim('fromLeft');
    setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    setAnim('fromRight');
    setActiveIndex(activeIndex - 1);
  };

  const clear = () => setAnim('');

  return (
    <div className="container">
      {/* content */}
      <div className="box" />
      {data && (
        <div className="item" onAnimationEnd={clear} anim={anim}>
          <p>{JSON.stringify(data[activeIndex])}</p>
          <p>{activeIndex}</p>
        </div>
      )}

      {/* controller */}
      <div className="controller">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default HorizontalScroll;
