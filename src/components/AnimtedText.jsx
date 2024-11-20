import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1
        className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        ${isVisible ? 'animate-fillText' : 'opacity-0'} transform origin-center`}
      >
        Animated Text
      </h1>
    </div>
  );
};

export default AnimatedText;
