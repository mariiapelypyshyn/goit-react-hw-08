import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
 const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  }
  
  return (
    <div className={css.container}>
      <div>
      <p>{contact.name}</p>
        <p>{contact.number}</p>
        </div>
      <button className={css.btn } onClick={onDeleteContact} type="button">Delete</button>
    </div>
  )
}

export default Contact;
