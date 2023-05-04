import React from 'react';
import { createPortal } from 'react-dom';
import { SingIn } from '../components/LogIn&SingIn/SingIn';
import css from '../components/LogIn&SingIn/Register.module.css';
import { Link } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

export function Register() {
  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <SingIn></SingIn>
        <Link className={css.link} to="/login">
          Log In
        </Link>
      </div>
    </div>,
    modalRoot
  );
}
