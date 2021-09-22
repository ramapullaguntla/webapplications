import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock';
import FlexBox from './FlexBoxes/FlexBox';
import NavigationFlexBox from './FlexBoxes/NavigationFlexBox';
import ToggleButton from './Components/ToggleButton';
import MobileFlexboxLayout from './FlexBoxes/NavigationFlexBox';
import Header from './Components/LoginHeader/Header';
import Authentication from './Components/LoginHeader/Authentication';


function App() {
  return (
    <div>
        <Header />    
        <Authentication/>        
    </div>);

}

export default App;
