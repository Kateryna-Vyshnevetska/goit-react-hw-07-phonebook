import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

import Filter from "./filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { filterContactsAction } from "../redux/phoneBook/actions";
import {
  StateAllContacts,
  StateFilter,
  getFilteredContacts,
} from "../components/selectors";

import {
  newContactOperation,
  deleteContactOperation,
  getContactsOperation,
} from "../redux/phoneBook/operations";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, []);

  const getContacts = (newContact) => {
    dispatch(newContactOperation(newContact));
  };

  const deleteContact = (id) => {
    dispatch(deleteContactOperation(id));
  };

  const getNamesByFilter = (value) => {
    dispatch(filterContactsAction(value));
  };

  return (
    <>
      <div className="section">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title-anim"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <ContactForm getContacts={getContacts} />
        <h2 className="title">Contacts</h2>
        {StateAllContacts(state).length >= 2 && (
          <Filter
            getNamesByFilter={({ target: { value } }) =>
              getNamesByFilter(value)
            }
          />
        )}

        <ContactList
          filteredItems={
            StateFilter(state) && StateAllContacts(state).length >= 2
              ? getFilteredContacts(state)
              : StateAllContacts(state)
          }
          getIdForDelete={deleteContact}
        />
      </div>
    </>
  );
}
