import React from 'react';
import './IconButton.sass';

interface IProps {
  icon: string;
}

const IconButton: React.FC<IProps> = ({ icon }) => {
  return (
    <button className="IconButton">
      <img loading="lazy" src={icon} alt="icon-button" />
    </button>
  );
};

export default IconButton;
