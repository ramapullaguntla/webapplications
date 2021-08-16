import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList'

const contacts = [
  {
      id: "123",
      "name": "John",
      "email": "john@gmail.com"
  },
  {
      id: "124",
      "name": "Mark",
      "email": "mark@gmail.com"
  },
];

function App() {
  return (
    <div className="ui container">
       <Header/>
       <AddContact/>
       <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
