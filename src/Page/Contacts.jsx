import React, { useEffect } from 'react';
import css from '../components/App/App.module.css';
import { Filter } from 'components/Filter/Filter';
import { PhonebookList } from 'components/Phonebook/PhonebookList';
import FormElement from 'components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contatcOperation';
import { getContacts } from 'redux/Contacts/contactsSlice';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.wrapp}>
        <h1 className={css.title}>Phonebook</h1>
        <FormElement />
      </div>

      <div className={css.wrapp}>
        {contacts.length > 0 && <h2 className={css.contact_title}>Contacts</h2>}
        {contacts.length > 0 && <PhonebookList />}
        {contacts.length > 1 && <Filter />}
      </div>
    </div>
  );
}

export default Contacts;
