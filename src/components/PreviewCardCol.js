import React from 'react';
import './PreviewCardCol.css';
import Button from './UI/Button';

const PreviewCardCol = ({ icon, title, paragraph, btnClass, className }) => {
  return (
    <div className={`preview-card-col ${className}`}>
      <img src={icon} alt={title} />
      <h1 className="header">{title.toUpperCase()}</h1>
      <p className="para">{paragraph}</p>
      <Button btnClass={btnClass} />
    </div>
  );
};

export default PreviewCardCol;
