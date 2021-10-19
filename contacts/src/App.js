import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'
import React, { useEffect, useState } from 'react';
import {uuid} from 'uuidv4';
import api from './api/contacts-api';

function App() {
 
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const getContacts = async () =>
  {
      const response = await api.get("/contacts");
      return response.data;
  };

  
  const addContactHandler = async (contact) =>
    {    
      console.log("New contact: " + JSON.stringify(contact));
      //setContacts([...contacts, {id: uuid(), ...contact}]);   
      
      var uniqueid = uuid();
      await api.post("/contacts", {id:uniqueid, ...contact});
      setContacts([...contacts, {id: uniqueid, ...contact}]);
      console.log("All contacts: " + JSON.stringify(contacts));      
    };


  const deleteContact = async (id) =>
  {
      await api.delete("/contacts/" + id);
  };
  const removeContactHandler = async (id) =>
  {
    //const newContactList = contacts.filter( (c) => c.id !== id);
    //setContacts(newContactList);
     await deleteContact(id);
     const allContacts = await getContacts();
     if(allContacts)
      {
        setContacts(allContacts);
      }

  }

    useEffect(() =>
    {
        //const retrieveStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const retrieveStorage = async () =>
        {
            const allContacts = await getContacts();
            if(allContacts)
              {
                setContacts(allContacts);
              }
        };

        retrieveStorage();
        
    }, []);

    useEffect(() =>
    {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
  
  return (
    <div className="ui container center">
       <Header/>
       
       <AddContact addContactHandler={addContactHandler}/>
       <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
