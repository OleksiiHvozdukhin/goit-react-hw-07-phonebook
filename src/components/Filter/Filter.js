import { useDispatch } from 'react-redux';
import { FilterInput, FilterLabel, FilterForm } from './Filter.styled';
import { getVisibleContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterForm>
      <FilterLabel>contacts</FilterLabel>
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={line => dispatch(getVisibleContacts(line.target.value))}
        autoComplete="off"
        required
      />
    </FilterForm>
  );
};
