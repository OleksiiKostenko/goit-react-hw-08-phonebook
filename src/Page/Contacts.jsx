import React from 'react';
import css from '../components/App/App.module.css';
import { Filter } from 'components/Filter/Filter';
import { PhonebookList } from 'components/Phonebook/PhonebookList';
import FormElement from 'components/Form/Form';

function Contacts() {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <FormElement />
      <h2 className={css.contact_title}>Contacts</h2>
      <Filter />
      <PhonebookList />
    </div>
  );
}

export default Contacts;
