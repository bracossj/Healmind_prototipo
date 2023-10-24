import style from '../components/home.module.css';
import logo from '../img/logo.png';

function HomePage() {

    return (
        <div>
            <header className={style.header}>
                <div className={style.logo}>
                    <img className={style.logoimg} src={logo} alt="" />
                    <h2 >HealMind</h2>
                </div>
                <nav >
                    <a className={style.navbuttons} href="/">Inicio</a>
                    <a className={style.navbuttons} href="/">Servicios</a>
                    <a className={style.navbuttons} href="/">Contacto</a>
                    <a className={style.navbuttons} href="/auth">Ingresar</a>
                </nav>
            </header>
        </div>
    )
}

export default HomePage

