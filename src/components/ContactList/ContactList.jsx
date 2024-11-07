import {  useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) && filteredContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact}
            />
          </li>
        )
        )}
      </ul>
    </div>
  )
};

export default ContactList;
