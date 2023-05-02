import React from 'react';

export function LogIn() {
  return (
    <div>
      <h2>Log in</h2>
      <form>
        <label htmlFor="email">
          Email
          <input type="email" name="" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
