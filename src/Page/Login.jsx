import React from 'react';
import { createPortal } from 'react-dom';
import { LogIn } from '../components/LogIn&SingIn/LogIn';
import css from '../components/LogIn&SingIn/Register.module.css';
import { Link } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

function Login() {
  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <LogIn></LogIn>
        <Link className={css.link} to="/register">
          Sing In
        </Link>
      </div>
    </div>,
    modalRoot
  );
}
export default Login;