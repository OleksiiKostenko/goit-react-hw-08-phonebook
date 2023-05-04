import { Button } from '@mui/material';
import { CssTextField } from 'components/styleComponent/InputStyle';
import React from 'react';
import css from './Register.module.css';

export function LogIn() {
  return (
    <div>
      <h2 className={css.title}>Log In</h2>
      <form className={css.form}>
        <CssTextField
          fullWidth
          label="Email"
          variant="standard"
          type="email"
          name=""
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
