import React from 'react';

const Button = ({
  onClick = () => {},
  textColor,
  backgroundColor,
  children,
  position,
  top,
  left
}) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color: textColor,
      border: 'none',
      top: top,
      left: left,
      position: position
    }}
  >
    {children}
  </button>
);

export default Button;
