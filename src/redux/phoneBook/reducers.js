import { createReducer } from "@reduxjs/toolkit";
import {
  filterContactsAction,
  error,
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./actions";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const phoneBookReducer = createReducer(
  { ...initialState },
  {
    [getContactSuccess]: (state, { payload }) => ({
      contacts: {
        ...state.contacts,
        items: payload,
      },
    }),
    [addContactSuccess]: (state, { payload }) => ({
      contacts: {
        ...state.contacts,
        items: [payload, ...state.contacts.items],
      },
    }),
    [deleteContactSuccess]: (state, { payload }) => ({
      contacts: {
        ...state.contacts,
        items: [
          ...state.contacts.items.filter(({ id }) => {
            return id !== payload;
          }),
        ],
      },
    }),
    [filterContactsAction]: (state, { payload }) => ({
      contacts: {
        items: [...state.contacts.items],
        filter: payload,
      },
    }),
  }
);

export const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
});

export const errors = createReducer("", {
  [error]: (_, { payload }) => payload,
  [addContactSuccess]: (_) => "",
  [deleteContactSuccess]: (_) => "",
  [filterContactsAction]: (_) => "",
});
