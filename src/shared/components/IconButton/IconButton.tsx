import React from 'react';
import classnames from 'classnames';
import './IconButton.sass';

interface IProps {
  icon: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IProps> = ({ icon, className, onClick }) => {
  return (
    <button onClick={onClick} className={classnames('IconButton', className)}>
      <img loading="lazy" src={icon} alt="icon-button" />
    </button>
  );
};

export default IconButton;
