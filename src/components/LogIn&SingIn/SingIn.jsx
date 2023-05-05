import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CssTextField } from '../styleComponent/InputStyle';
import css from './Register.module.css';
import { register } from 'redux/Autorization/authOprations';

export function SingIn() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2 className={css.title}>Sing In</h2>
      <form
        className={css.form}
        onSubmit={handleSubmit}
        action=""
        autoComplete="off"
      >
        <CssTextField
          fullWidth
          type="text"
          name="name"
          label="Name"
          variant="standard"
          fontColor="white"
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
        <Button
          sx={{ mt: 2 }}
          color="secondary"
          type="submit"
          variant="contained"
          size="small"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
