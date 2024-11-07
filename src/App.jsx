import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Section from './components/Section/Section';

import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectIsError, selectIsLoading } from './redux/selectors';




function App() {
  const dispatch = useDispatch();
  const selectLoading = useSelector(selectIsLoading);
  const selectError = useSelector(selectIsError);
  
  useEffect(() => {
dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm  />
        <SearchBox />
        {selectLoading && !selectError && <b>Request in progress...</b>}
        <ContactList />
        </Section>
</div>
  )
}

export default App;
