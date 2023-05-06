import { Routes, Route } from 'react-router-dom';
import { Context } from '../../hooks/Context';
import { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/Autorization/authOprations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { lazy } from 'react';

const Home = lazy(() => import('Page/Home'));
const Contacts = lazy(() => import('Page/Contacts'));
const Login = lazy(() => import('Page/Login'));
const Register = lazy(() => import('Page/Register'));
const NotFound = lazy(() => import('Page/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return refresh ? (
    <b>Refreshing user...</b>
  ) : (
    <Context>
      <Routes>
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} redirectTo="/" />}
        />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute component={<Home />} redirectTo="/login" />}
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Context>
  );
};
