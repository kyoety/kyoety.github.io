import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const FadeInFromBottom = ({ children, classNames}) => {
  // Set up the intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.1,    // trigger when 10% of the div is in view
  });

  // Set up the spring animation
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: { tension: 200, friction: 50 },
  });

  return (
    // The animated.div will apply the springProps to the div element
    <animated.div ref={ref} style={springProps} className={classNames || ''}>
      {children}
    </animated.div>
  );
};

export default FadeInFromBottom;