import React, { useEffect, useState } from "react";

export default function OneLiner({ children, className }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className={`${className} ${visible ? "visible" : ""}`}>
      {children}
    </p>
  );
}
