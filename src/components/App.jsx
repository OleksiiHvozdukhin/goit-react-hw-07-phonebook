import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { fetchContacts } from 'redux/operation';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px 0 0 0',
      }}
    >
      <Title />
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
