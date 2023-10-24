import style from '../components/home.module.css';
import logo from '../img/logo.png';

function HomePage() {

    return (
        <div className={style.HomePage}>
            <header className={style.header}>
                <div className={style.logo}>
                    <img className={style.logoimg} src={logo} alt="" />
                    <h2 >HealMind</h2>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li><a className={style.navbuttons} href="/">Inicio</a></li>
                        <li><a className={style.navbuttons} href="/">Importancia</a></li>
                        <li><a className={style.navbuttons} href="/">Trastornos</a></li>
                    </ul>
                </nav>
                <button type="button" className={style.buttoningresar} href="/auth">Ingresar</button>
            </header>
        </div>
    )
}

export default HomePage

