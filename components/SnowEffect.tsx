import React, { useEffect, useRef } from 'react';

const SnowEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.width = Math.random() * 8 + 4 + 'px';
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s
      snowflake.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      
      container.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="snow-container" ref={containerRef} />;
};

export default SnowEffect;