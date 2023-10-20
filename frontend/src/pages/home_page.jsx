import '../styles/home.css';
import logo from '../img/logo.png';

function HomePage() {

    return (
        <nav className="navbarhome">
            <div className="title_logo">
                <h1 className="titlehome">HealtMind</h1>
                <img src={logo} alt="" className="logonav" />
            </div>
            <ul className="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
                <li><a href="/login">Ingresar</a></li>
            </ul>
        </nav>
    )
}

export default HomePage

