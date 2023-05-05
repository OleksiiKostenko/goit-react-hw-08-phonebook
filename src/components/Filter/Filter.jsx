import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/Contacts/filterSlice';

export const Filter = () => {
  const distpatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContacts = evt => {
    const value = evt.target.value;
    distpatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={filterContacts}
      />
    </label>
  );
};
