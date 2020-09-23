import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./actions";

axios.defaults.baseURL = "http://localhost:3000";

export const newContactOperation = (text) => async (dispatch) => {
  const contact = {
    id: uuidv4(),
    ...text,
  };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const getContactsOperation = () => async (dispatch) => {
  dispatch(getContactRequest());

  try {
    const { data } = await axios.get(`/contacts`);
    dispatch(getContactSuccess(data));
  } catch (error) {
    dispatch(getContactError(error));
  }
};
