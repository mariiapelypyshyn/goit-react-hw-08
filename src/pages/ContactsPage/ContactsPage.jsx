import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
dispatch(fetchContacts())
  }, [dispatch]);
  
  return (
    <div>
      <ContactForm />
       <SearchBox/>
      <ContactList />
     
    </div>
  )
}

export default ContactsPage;
