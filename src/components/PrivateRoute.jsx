import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(state => state.auth.isLoggedIn);
  const refresh = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isLogIn && !refresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
