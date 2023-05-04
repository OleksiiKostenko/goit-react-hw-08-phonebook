import { FormGroup, Input, InputLabel } from '@mui/material';
import React from 'react';

export function LogIn() {
  return (
    <div>
      <h2>Log In</h2>
      <FormGroup>
        <InputLabel htmlFor="email">
          Email
          <Input type="email" name="" />
        </InputLabel>
        <InputLabel htmlFor="password">
          Password
          <Input type="password" name="" />
        </InputLabel>
        <button type="submit">Submit</button>
      </FormGroup>
    </div>
  );
}
