import logo from "../assets/logo.png";

export default function Header(props) {
    return ( 
        <header className="header">
            <img className="logoImg" src={logo} alt="Logistics UK Logo"></img>
        </header>
    );
  }