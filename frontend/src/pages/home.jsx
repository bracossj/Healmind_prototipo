import '../styles/home.css';
import logo from '../img/logo.png';
import { BiLogIn } from "react-icons/bi";

function HomePage() {

    return (
        <div>
            <header className="header">
                <div className="title_logo">
                    <h2 className="titlehome">HealMind</h2>
                    <img src={logo} alt="" className="logohome" />
                </div>

                <ul className="nav-links">
                    <a href="/">Inicio</a>
                    <a href="/">Servicios</a>
                    <a href="/">Contacto</a>
                </ul>

                <div className="nav-links">
                    <a href="/auth">Ingresar <BiLogIn size="20px" /></a>
                </div>
            </header>
        </div>
    )
}

export default HomePage

