import UserMenu from 'components/UserMenu/UserMenu';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navLink}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </nav>
        <UserMenu></UserMenu>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}></footer>
    </>
  );
}

export default Layout;
