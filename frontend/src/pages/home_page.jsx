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
                <li><a href="/">Servicios</a></li>
                <li><a href="/">Contacto</a></li>
                <li><a href="/auth">Ingresar</a></li>
            </ul>
        </nav>
    )
}

export default HomePage

