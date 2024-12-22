import React from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const StaggeredFadeIn = ({ children, classNames }) => {
  // Set up the intersection observer
  const [ref, inView] = useInView({
    triggerOnce: false, // Set to false to allow repeated triggering
    threshold: 0.1,
  });

  // Create springs for each child with a staggered delay
  const springs = useSprings(
    children.length,
    children.map((_, index) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      delay: index * 200, // Stagger by 200ms per item
      config: { tension: 200, friction: 20 },
    }))
  );

  return (
    <div ref={ref} className={classNames || ''}>
      {springs.map((springProps, index) => (
        <animated.div key={index} style={springProps}>
          {children[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default StaggeredFadeIn;