import React from 'react';
import '../styles/button.css';

export function Button({ variant = 'default', children, onClick }) {
  const className = `btn ${variant}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
