import { createSelector } from "@reduxjs/toolkit";

export const StateAllContacts = (state) => state.contacts.contacts.items;

export const StateFilter = (state) => state.contacts.contacts.filter;

export const getFilteredContacts = createSelector(
  [StateFilter, StateAllContacts],
  (filter, items) => {
    return items.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
