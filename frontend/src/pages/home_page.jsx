import '../styles/home.css';
import logo from '../img/logo.png';
import { BiLogIn } from "react-icons/bi";


function HomePage() {

    return (
        <div className="home">
            <nav className="navbarhome">
                <div className="title_logo">
                    <h1 className="titlehome">HealtMind</h1>
                    <img src={logo} alt="" className="logonav" />
                </div>

                <ul className="nav-links">
                    <a href="/">Inicio</a>
                    <a href="/">Servicios</a>
                    <a href="/">Contacto</a>
                </ul>

                <div className="nav-links">
                    <a href="/auth">Ingresar <BiLogIn size="20px" /></a>
                </div>
            </nav>
            <div></div>
        </div>
    )
}

export default HomePage

