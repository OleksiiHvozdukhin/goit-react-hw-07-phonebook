import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const visibleContacts = [];
    contacts.map(contact => {
      if (
        filter &&
        !contact.name.toLowerCase().includes(filter.toLowerCase())
      ) {
        // return null;
      } else visibleContacts.push(contact);
    });
    return visibleContacts.reverse();
  }
);
