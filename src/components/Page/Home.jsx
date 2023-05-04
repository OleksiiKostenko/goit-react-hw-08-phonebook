import React from 'react';
import css from 'components/App.module.css';
import { Filter } from 'components/Filter';
import { PhonebookList } from 'components/PhonebookList';
import FormElement from 'components/Form';

export function Home() {
  return (
    <div className={css.wrapp}>
      <h1 className={css.title}>Phonebook</h1>
      <FormElement />
      <h2 className={css.contact_title}>Contacts</h2>
      <Filter />
      <PhonebookList />
    </div>
  );
}
