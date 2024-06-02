import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

// Define types for the styles
const LoadingDot: React.CSSProperties = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: 'black',
  borderRadius: '50%',
};

const LoadingContainer: React.CSSProperties = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
};

// Define types for the variants
const ContainerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants: Variants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

// Define the type for the transition
const DotTransition: Transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};

export function ThreeDotsWave(): JSX.Element {
  return (
    <div
      style={{
        paddingTop: '5rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
