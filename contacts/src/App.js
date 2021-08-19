import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'
import React, { useEffect, useState } from 'react';
import {uuid} from 'uuidv4';


function App() {
 
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>
    {    
      console.log("New contact: " + JSON.stringify(contact));
      setContacts([...contacts, {id: uuid(), ...contact}]);   
      
      console.log("All contacts: " + JSON.stringify(contacts));
    };

  const removeContactHandler = (id) =>
  {
    const newContactList = contacts.filter( (c) => c.id !== id);
    setContacts(newContactList);
  }

    useEffect(() =>
    {
        const retrieveStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retrieveStorage)
        {
          setContacts(retrieveStorage);
        }
    }, []);

    useEffect(() =>
    {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
  
  return (
    <div className="ui container">
       <Header/>
       <AddContact addContactHandler={addContactHandler}/>
       <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
