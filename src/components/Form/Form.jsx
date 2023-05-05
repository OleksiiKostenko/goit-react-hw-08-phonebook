import React from 'react';
import css from '../Form/Form.module.css';
import { Button } from '@mui/material';
import { CssTextField } from 'components/styleComponent/InputStyle';
import { useInputContex } from '../../hooks/Context';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/Contacts/contactsSlice';
import { addContact } from 'redux/Contacts/contatcOperation';
import { nanoid } from '@reduxjs/toolkit';

const FormElement = () => {
  const { nameValue, addName, numberValue, addNumber } = useInputContex();

  const contacts = useSelector(getContacts);
  const distpatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const names = contacts.map(contact => contact.name);

    if (names.includes(nameValue)) {
      alert(`${nameValue}is already in contacts.`);
      return;
    }
    addContact(
      distpatch(
        addContact({
          id: nanoid(),
          name: nameValue,
          number: numberValue,
        })
      )
    );
    reset();
  };

  const reset = () => {
    addName('');
    addNumber('');
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <CssTextField
        fullWidth
        label="Name"
        variant="standard"
        type="text"
        value={nameValue}
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => addName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        sx={{
          width: 300,
          '& .MuiInputLabel-root': { color: 'white' },
          borderBottom: '1px solid white',
          '& .MuiInputBase-root': {
            color: 'white',
          },
        }}
      />
      <CssTextField
        fullWidth
        label="Number"
        variant="standard"
        type="tel"
        name="number"
        value={numberValue}
        onChange={e => addNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        sx={{
          width: 300,
          '& .MuiInputLabel-root': { color: 'white' },
          borderBottom: '1px solid white',
          '& .MuiInputBase-root': {
            color: 'white',
          },
        }}
      />
      <Button
        sx={{ mt: 2 }}
        color="secondary"
        type="submit"
        variant="contained"
        size="small"
      >
        Add Contact
      </Button>
    </form>
  );
};

export default FormElement;
