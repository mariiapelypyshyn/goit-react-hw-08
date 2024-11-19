import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

import Contact from '../Contact/Contact';
import Loader from '../Loader';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  
  return (
    <div>
      {error && (<p className={css.contactListMsg}>Ooops, something went wrong. Please, try again later.</p>)}
      {loading && (<Loader />)}
      {Array.isArray(filteredContacts) && filteredContacts.length === 0 && (
        <p className={css.contactListMsg}>There are no contacts in your phonebook yet</p>
      )
      }
      <ul className={css.contactList}>
      {Array.isArray(filteredContacts) && filteredContacts.length > 0 && filteredContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
    <Contact contact={contact}/>
          </li>
        )
        )}
        </ul>
    </div>
  )
};

export default ContactList;
