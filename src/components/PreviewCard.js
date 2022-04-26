import React from 'react';
import './PreviewCard.css';
import PreviewCardCol from './PreviewCardCol';
import iconLuxury from '../assets/icon-luxury.svg';
import iconSedans from '../assets/icon-sedans.svg';
import iconSuvs from '../assets/icon-suvs.svg';

const PreviewCard = () => {
  return (
    <div className="preview-card">
      <PreviewCardCol
        className="card-orange"
        icon={iconSedans}
        borderRadius={12}
        title="Sedans"
        btnClass={'btn-orange'}
        paragraph={`Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
  or on your next road trip.`}
        bgColor={'hsl(31, 77%, 52%)'}
      />
      <PreviewCardCol
        className="card-dark-cyan"
        icon={iconSuvs}
        title="Suvs"
        borderRadius={0}
        btnClass={'btn-dark-cyan'}
        paragraph={`Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
  and off-road adventures.`}
        bgColor="hsl(184, 100%, 22%)"
      />
      <PreviewCardCol
        className="card-very-dark-cyan"
        icon={iconLuxury}
        borderRadius={12}
        title="luxury"
        btnClass={'btn-very-dark-cyan'}
        paragraph={`Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
  rental and arrive in style.`}
        bgColor="hsl(179, 100%, 13%)"
      />
    </div>
  );
};

export default PreviewCard;
