import {
  ContactsList,
  ContactListItem,
  ContactButton,
  ContactTitle,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <ContactTitle>
              {contact.name}, {contact.number}
            </ContactTitle>
            <ContactButton onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </ContactButton>
          </ContactListItem>
        );
      })}
    </ContactsList>
  );
};
