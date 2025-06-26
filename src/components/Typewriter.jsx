import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, className }) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const smiley = ' :)';
    let typingSmiley = false;
    function typeNext() {
      if (!typingSmiley) {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length || cancelled) {
          if (!cancelled) {
            typingSmiley = true;
            setTimeout(() => {
              if (!cancelled) {
                i = 0;
                typeNext();
              }
            }, 600); // pause before smiley
          }
          return;
        }
        const char = text[i - 1];
        let delay = 60;
        if (char === ',') delay = 400;
        setTimeout(typeNext, delay);
      } else {
        // Typing the smiley
        setDisplayed(text + smiley.slice(0, i + 1));
        i++;
        if (i === smiley.length || cancelled) return;
        setTimeout(typeNext, 120);
      }
    }
    typeNext();
    return () => { cancelled = true; };
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className={className} style={{ display: 'inline-block' }}>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: '1ch',
        color: '#222',
        fontWeight: 400,
        opacity: showCursor ? 1 : 0,
        transition: 'opacity 0.2s',
      }}>
        |
      </span>
    </h1>
  );
}
