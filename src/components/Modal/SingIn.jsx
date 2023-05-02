import React from 'react';

export function SingIn() {
  return (
    <div>
      <h2>Sing in</h2>
      <form action="">
        <label htmlFor="">
          Name
          <input type="text" name="" id="" />
        </label>
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
