"use client"

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // Optional speed prop to control the typing speed
}

function TypeWriter({ text, speed = 100 }: TypewriterProps) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      // Append the next character to the typedText state
      setTypedText((prevTypedText) => prevTypedText + text.charAt(index));
      index++;

      // If the end of the text is reached, clear the interval
      if (index === text.length) {
        clearInterval(timer);
      }
    }, speed);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [text, speed]);

  return <p className="text-xl text-gray-400 mb-8 animate-easyUp">{typedText}</p>;
}

export default TypeWriter;