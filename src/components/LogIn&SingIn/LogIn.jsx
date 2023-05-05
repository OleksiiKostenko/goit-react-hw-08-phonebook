import { Button } from '@mui/material';
import { CssTextField } from 'components/styleComponent/InputStyle';
import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Autorization/authOprations';

export function LogIn() {
  const dispatch = useDispatch();

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
