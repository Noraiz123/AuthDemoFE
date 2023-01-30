import React from 'react';

const Button = ({ text, color, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor }}
      className={`w-full h-full text-sm font-medium rounded-md shadow-lg`}>
      {text}
    </button>
  );
};

export default Button;
