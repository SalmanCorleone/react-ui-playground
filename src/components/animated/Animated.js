import React from 'react';
import { motion } from 'framer-motion';
import './Animated.css';

const Animated = () => {
  return (
    <motion.div
      animate={{ x: -100 }}
      transition={{ duration: 0.2 }}
      className="container">
      <p>Hello Anim</p>
      <p>Hello Anim</p>
      <p>Hello Anim</p>
      <p>Hello Anim</p>
    </motion.div>
  );
};

export default Animated;
