import React, { useState, useEffect } from 'react';

 // Characters that look "encrypted" or "hashed"
 const encryptedChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const getRandomEncryptedChar = () => {
  return encryptedChars[Math.floor(Math.random() * encryptedChars.length)];
};

const generateEncryptedString = (length) => {
  return Array.from({ length }, () => getRandomEncryptedChar()).join('');
};

export default function Decoder({ text, className }) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isDecoding, setIsDecoding] = useState(false);


  useEffect(() => {
    let cancelled = false;
    let currentIndex = 0;
    let scrambleCount = 0;
    const maxScrambles = 1; // Number of times to scramble before revealing each character

    const startDecoding = () => {
      setIsDecoding(true);

      const decodeNext = () => {
        if (cancelled) return;

        if (currentIndex < text.length) {
          // Scramble the current position a few times before revealing
          if (scrambleCount < maxScrambles) {
            const currentText = text.slice(0, currentIndex);
            const remainingLength = text.length - currentIndex;
            const scrambledRemaining = generateEncryptedString(remainingLength);
            setDisplayed(currentText + scrambledRemaining);
            scrambleCount++;

            setTimeout(decodeNext, 100); // Fast scramble
          } else {
            // Reveal the actual character
            const nextIndex = currentIndex + 1;
            const revealedText = text.slice(0, nextIndex);
            const remainingLength = text.length - nextIndex;
            const scrambledRemaining = generateEncryptedString(remainingLength);
            setDisplayed(revealedText + scrambledRemaining);
            currentIndex = nextIndex;
            scrambleCount = 0;

            const delay = text[currentIndex - 1] === ' ' ? 50 : 150; // Faster for spaces
            setTimeout(decodeNext, delay);
          }
        } else {
          // Decoding complete
          setDisplayed(text);
          setIsDecoding(false);
        }
      };

      decodeNext();
    };

    // Start with fully encrypted text
    setDisplayed(generateEncryptedString(text.length));

    // Begin decoding after a short delay
    setTimeout(startDecoding, 1000);

    return () => { cancelled = true; };
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className={`inline-block ${className}`}>
      <span className={`transition-colors duration-300 ease-in-out ${
        isDecoding ? 'text-red-500' : 'text-gray-800'
      }`}>
        {displayed}
      </span>
      <span className={`inline-block w-4 transition-all duration-200 ease-in-out ${
        isDecoding ? 'text-red-500' : 'text-gray-800'
      } ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </h1>
  );
}
