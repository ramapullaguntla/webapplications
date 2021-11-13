import Authentication from './Components/LoginHeader/Authentication';
import "./App.css";
import { UserContextProvider } from './context/userContext';
import SideNavBar from './Components/SideNavBar/SideNavbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/SideNavBar/Pages/Homepage';
import Reports from './Components/SideNavBar/Pages/Reports';
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import Contacts from './Components/SideNavBar/Pages/Contacts';
import WebServices from './Components/SideNavBar/Pages/WebServices';
import Temperature from './Components/LiftStateUp/Temperature';
import CalculateTemperature from './Components/LiftStateUp/CalculateTemperature';
import Game from './Components/tictactoe/Game';
import {contactsApi} from './serverapi/contactsApi';
import { useState, useEffect } from 'react';
import {uuid} from 'uuidv4';
import { LogInProvider } from './context/loginUserContext';
import UpdateContact from './Components/SideNavBar/Pages/UpdateContact';
import ProtectedRoute from './Protected/ProtectedRoute';
import SignUpForm from './Components/LoginHeader/SignUp';

function App() {

  
  const LOCAL_STORAGE_KEY = "contactdata"
  const [allcontacts, setContacts] = useState([]);

  const getContacts = async () =>
  {
      const response = await contactsApi.get("/contacts");
      console.log('contacts are ' + response.data);
      return response.data;
  };

  const addContacts = async (ctc) =>
  {
      const response = await contactsApi.post("/contacts", ctc);
      
      return response.data;
  };

  const deleteContact = async (id) =>
  {
      const response = await contactsApi.delete("/contacts/" + id);      
      return response.data;
  };

  const updateContact = async (ct) =>
  {
      const response = await contactsApi.put("/contacts/" + ct.id, ct);      
      return response.data;
  };

  useEffect(() =>
  {

    const getData = async () =>
    {
        var retrieveContacts = await getContacts();
        if(retrieveContacts)
        {
          setContacts(retrieveContacts);
        }
    };

    getData();

  }, []);

  const addMainContact = async (ct) =>
  {
     console.log("New contact in app.js is " + ct.name);
     
     setContacts([...allcontacts, ct]);
     await addContacts(ct);

  };

  const deleteMainContact = async (id) =>
  {
     console.log("Deleted contact ID " + id);
     
     await deleteContact(id);

     var newcontacts = allcontacts.filter(c => c.id != id);
     setContacts(newcontacts);  
  };

  const updateMainContact = async (ct) =>
  {
     console.log("Contact being updated is " + ct.name);
          
     await updateContact(ct);

     var retrieveContacts = await getContacts();
      if(retrieveContacts)
      {
        setContacts(retrieveContacts);
      }

    };

  return (
    <LogInProvider>
    <Router>      
      <SideNavBar/>           
      <Switch>
        <Route path="/" exact component={Authentication}/>
        <Route path="/signup" exact component={SignUpForm}/>
        <ProtectedRoute path="/reports"  component = {Reports}/>
        <ProtectedRoute path="/products"  exact component = {ProductList}/>
        <ProtectedRoute path="/products/:productid"  component = {ProductDetails}/>
        <ProtectedRoute path="/updateContact"  render={(props) => <UpdateContact editContact= {updateMainContact}/>}/>
        {/* <ProtectedRoute path="/contacts"  render={(props) => <Contacts {...props} contactdata = {allcontacts} addMainContact={addMainContact} 
                   deleteMainContact={deleteMainContact}></Contacts>}/> */}
        <ProtectedRoute path="/contacts"  component = {Contacts} contactdata = {allcontacts} addMainContact={addMainContact} 
                   deleteMainContact={deleteMainContact}/>
        <Route path="/webservices"  component = {WebServices}/>                 
      </Switch>
    </Router>
    </LogInProvider>
    // <CalculateTemperature/>

    // <Game/>
     );

}

export default App;
