import { Routes, Route } from 'react-router-dom';
import { Context } from '../../hooks/Context';
import { Login } from '../../Page/Login';
import { Home } from '../../Page/Home';
import NotFound from '../../Page/NotFound';
import { Register } from 'Page/Register ';
import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import Contacts from 'Page/Contacts';

export const App = () => {
  return (
    <Context>
      <Routes>
        <Route
          path="/register"
          element={
            <Suspense>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Context>
  );
};
