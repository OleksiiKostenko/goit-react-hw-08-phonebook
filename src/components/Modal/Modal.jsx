import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SingIn } from './SingIn';
import { LogIn } from './LogIn';
import css from './Modal.module.css';
import { Button } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');

export function Modal() {
  const [buttonChange, setButtonChange] = useState(true);

  const handleChange = () => {
    setButtonChange(!buttonChange);
  };

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        {buttonChange ? <LogIn></LogIn> : <SingIn></SingIn>}
        {buttonChange ? (
          <Button
            type="button"
            size="small"
            variant="contained"
            onClick={handleChange}
          >
            Sing In
          </Button>
        ) : (
          <Button
            type="button"
            size="small"
            variant="contained"
            onClick={handleChange}
          >
            Log In
          </Button>
        )}
      </div>
    </div>,
    modalRoot
  );
}
