import { Button } from '@mui/material';
import { CssTextField } from 'components/styleComponent/InputStyle';
import React, { useEffect } from 'react';
import css from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/Autorization/auth-oprations';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
  const dispatch = useDispatch();
  const isLogIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLogIn && navigate('/');
  }, [isLogIn, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2 className={css.title}>Log In</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <CssTextField
          fullWidth
          label="Email"
          variant="standard"
          type="email"
          name="email"
          sx={{
            '& .MuiInputLabel-root': { color: 'white' },
            borderBottom: '1px solid white',
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <CssTextField
          fullWidth
          label="Password"
          type="password"
          variant="standard"
          name="password"
          sx={{
            '& .MuiInputLabel-root': { color: 'white' },
            borderBottom: '1px solid white',
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <Button sx={{ mt: 2 }} type="submit" variant="contained" size="small">
          Submit
        </Button>
      </form>
    </div>
  );
}
