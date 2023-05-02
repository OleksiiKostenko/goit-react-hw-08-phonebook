import React from 'react';
import { createPortal } from 'react-dom';
import { SingIn } from './SingIn';
import { LogIn } from './LogIn';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export function Modal() {
  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <LogIn></LogIn>
        <SingIn></SingIn>
      </div>
    </div>,
    modalRoot
  );
}
