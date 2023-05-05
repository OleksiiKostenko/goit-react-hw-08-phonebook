import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(state => state.auth.isLoggedIn);

  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};
