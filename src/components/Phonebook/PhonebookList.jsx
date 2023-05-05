import css from '../Phonebook/PhonebookList.module.css';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/filterSlice';
import { getContacts } from 'redux/Contacts/contactsSlice';
import { deleteContact } from 'redux/Contacts/contatcOperation';

export const PhonebookList = () => {
  const distpatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list_item}>
      {filteredList.map(({ id, name, number }) => (
        <li className={css.list_el} key={id}>
          <p className={css.list_title}>
            {name}:{number}
          </p>
          <Button
            sx={{ mr: 2 }}
            onClick={() => distpatch(deleteContact(id))}
            type="button"
            variant="contained"
            size="small"
            color="secondary"
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
