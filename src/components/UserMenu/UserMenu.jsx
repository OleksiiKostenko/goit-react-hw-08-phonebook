import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import { logOut } from 'redux/Autorization/authOprations';

function UserMenu() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapp}>
      <h3 className={css.title}>Hello {user.name}</h3>
      <Button
        onClick={handleClick}
        type="submit"
        variant="contained"
        size="small"
        color="secondary"
      >
        Log out
      </Button>
    </div>
  );
}

export default UserMenu;
