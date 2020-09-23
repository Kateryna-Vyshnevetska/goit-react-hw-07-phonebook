import { createAction } from "@reduxjs/toolkit";

export const getContactRequest = createAction("phonebook/getContactRequest");
export const getContactSuccess = createAction("phonebook/getContactSuccess");
export const getContactError = createAction("phonebook/getContactError");

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const deleteContactRequest = createAction(
  "phonebook/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "phonebook/deleteContactSuccess"
);
export const deleteContactError = createAction("phonebook/deleteContactError");

export const filterContactsAction = createAction("phonebook/FILTER_CONTACTS");
export const error = createAction("errors/ERROR_MESSAGE");
