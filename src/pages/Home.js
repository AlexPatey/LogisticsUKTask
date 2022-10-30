import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header.js';
import Menu from '../components/Menu.js';
import Drivers from '../components/Drivers.js';

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <div className="bodyContainer">
                <Menu/>
                <Drivers />
            </div>
        </div>
    )
  };
  
export default Home;