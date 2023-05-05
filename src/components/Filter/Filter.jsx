import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/Contacts/filterSlice';
import { CssTextField } from 'components/styleComponent/InputStyle';

export const Filter = () => {
  const distpatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContacts = evt => {
    const value = evt.target.value;
    distpatch(setFilter(value));
  };

  return (
    <CssTextField
      fullWidth
      label="Find contacts by name"
      variant="standard"
      type="text"
      value={filter}
      name="filter"
      onChange={filterContacts}
      sx={{
        width: 300,
        '& .MuiInputLabel-root': { color: 'white' },
        borderBottom: '1px solid white',
        '& .MuiInputBase-root': {
          color: 'white',
        },
      }}
    />
  );
};
