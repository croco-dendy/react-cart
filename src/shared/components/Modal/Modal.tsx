import React from 'react';
import classnames from 'classnames';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Overlay } from '@blueprintjs/core';
import './Modal.sass';

interface IProps {
  show: boolean;
  className?: string;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ show, className, onClose, children }) => {
  const bodyControls = useAnimation();

  const handleOpening = () => {
    bodyControls.start('show');
  };

  const handleClose = async () => {
    await bodyControls.start('hide');
    onClose();
  };

  return (
    <Overlay
      isOpen={show}
      onClose={handleClose}
      onOpening={handleOpening}
      className="Modal"
      backdropClassName="CartBackdrop"
      canEscapeKeyClose
      canOutsideClickClose
    >
      <div className="CartBodyContainer">
        <motion.div
          variants={bodyVariants}
          animate={bodyControls}
          initial="initial"
          className={classnames('CartBody', className)}
        >
          {children}
        </motion.div>
      </div>
    </Overlay>
  );
};

export default Modal;

const bodyVariants: Variants = {
  initial: { opacity: 0, y: -100 },
  hide: { opacity: 0, y: 100, transition: { duration: 0.1 } },
  show: { opacity: 1, y: 0 },
};
