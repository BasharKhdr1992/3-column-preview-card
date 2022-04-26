import React from 'react';
import './Button.css';

const Button = ({ btnClass }) => {
  return <button className={`btn-learn-more ${btnClass}`}>Learn More</button>;
};

export default Button;
