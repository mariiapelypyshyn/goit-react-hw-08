import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
 const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  
  return (
    <div className={css.container}>
      <div>
      <p>{contact.name}</p>
        <p>{contact.number}</p>
        </div>
      <button className={css.btn } onClick={()=> onDeleteContact(contact.id)} type="button">Delete</button>
    </div>
  )
}

export default Contact;
