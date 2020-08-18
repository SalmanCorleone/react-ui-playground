import React from 'react';
import { motion } from 'framer-motion';
import './Animated.css';

const Animated = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div className="container">
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <motion.li variants={item}>
          <p>dsadasdasd</p>
        </motion.li>
        <motion.li variants={item}>
          <p>dsadasdasd</p>
        </motion.li>
        <motion.li variants={item}>
          <p>dsadasdasd</p>
        </motion.li>
        <motion.li variants={item}>
          <p>dsadasdasd</p>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Animated;
