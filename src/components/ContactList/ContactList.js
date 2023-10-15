import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  if (contacts.length !== 0)
    return (
      <ContactsList>
        {contacts.map(contacts => {
          if (
            filter &&
            !contacts.name.toLowerCase().includes(filter.toLowerCase())
          ) {
            return null;
          }
          return (
            <ContactListItem key={contacts.id}>
              <ContactTitle>
                {contacts.name}, {contacts.number}
              </ContactTitle>
              <ContactButton
                onClick={() => dispatch(deleteContact(contacts.id))}
              >
                Delete
              </ContactButton>
            </ContactListItem>
          );
        })}
      </ContactsList>
    );
  else return <p>NOPE</p>;
};
