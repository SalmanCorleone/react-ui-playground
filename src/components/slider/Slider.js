import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anim, setAnim] = useState('');

  const next = () => {
    setAnim('Right');
    if (activeIndex > data.length - 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prev = () => {
    setAnim('Left');
    if (activeIndex < 1) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleDotPress = (i) => {
    if (i < activeIndex) {
      setAnim('Left');
    } else {
      setAnim('Right');
    }
    setActiveIndex(i);
  };

  const clearAnim = () => setAnim('');

  return (
    <div className="container">
      {/* Image Contents */}

      <div className="slide-holder">
        <img
          src={data[activeIndex]}
          className="slide"
          onAnimationEnd={clearAnim}
          anim={anim}
        />
      </div>

      {/* Control Buttons */}
      <div className="controller-box">
        <div className="btn" onClick={prev}>
          <p>{'Prev'}</p>
        </div>

        {/* <a onClick={next}> */}
        <div className="btn" onClick={next}>
          <p>{'Next'}</p>
        </div>
        {/* </a> */}
      </div>

      {/* Dots */}
      <div className="dot-box">
        {data &&
          data.map((_, i) => (
            <a onClick={() => handleDotPress(i)} key={i}>
              <div className={`dot ${activeIndex === i ? 'active' : ''}`} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Slider;
