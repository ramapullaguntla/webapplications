import Authentication from './Components/LoginHeader/Authentication';
import "./App.css";
import { UserContextProvider } from './context/userContext';
import SideNavBar from './Components/SideNavBar/SideNavbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/SideNavBar/Pages/Homepage';
import Reports from './Components/SideNavBar/Pages/Reports';
import Products from './Components/SideNavBar/Pages/Products';
import Contacts from './Components/SideNavBar/Pages/Contacts';

const contactsdata = [
  {
    name: "John",
    email: "jh@gmail.com"
  },
  {
    name: "Mark",
    email: "mark@gmail.com"
  },
  {
    name: "Steve",
    email: "st@gmail.com"
  },
];

function App() {
  return (
    <UserContextProvider>
    <Router>      
      <SideNavBar/>   
      <Authentication/>    
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reports"  component = {Reports}/>
        <Route path="/products"  component = {Products}/>
        <Route path="/contacts"  render={(props) => <Contacts {...props} contactdata = {contactsdata}></Contacts>}/>
      </Switch>
    </Router>
    </UserContextProvider> );

}

export default App;
