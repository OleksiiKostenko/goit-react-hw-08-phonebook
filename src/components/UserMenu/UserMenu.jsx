import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from 'redux/Autorization/auth-oprations';

function UserMenu() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const isLogIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogIn && navigate('/login');
  }, [isLogIn, navigate]);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
