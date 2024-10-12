"use client"

import { useState, useEffect } from 'react'

interface TypewriterProps {
    text: string;
    speed?: number; // Optional speed prop to control the typing speed
  }

  function TypeWriter({ text, speed = 100 }: { text: string; speed?: number }) {
    const [typedText, setTypedText] = useState('');
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
          setTypedText((prev) => prev + text.charAt(index));
          index++;
          if (index === text.length) {
            clearInterval(timer);
          }
        }, speed);
    
        return () => clearInterval(timer); // Cleanup interval on component unmount
      }, [text, speed]);
    
      return <p className="text-xl text-gray-400 mb-8 animate-easyUp">{typedText}</p>;
  }

  export default TypeWriter;