import style from '../components/principal.module.css';

function PrincipalPage() {

    return (
        <div className={style.container}>
            <div className={style.navigation}>
                <ul>
                    <li>
                        <a href="#">
                            <span className={style.icon}><ion-icon name="home-outline"></ion-icon></span>
                            <span className={style.tittle}>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={style.icon}><ion-icon name="clipboard-outline"></ion-icon></span>
                            <span className={style.tittle}>HealBot</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={style.icon}><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            <span className={style.tittle}>Habla con un Profesional</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={style.icon}><ion-icon name="document-text-outline"></ion-icon></span>
                            <span className={style.tittle}>Historial de diagnosticos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={style.icon}><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className={style.tittle}>Cerrar sesión</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.contenido}>
                hola a todos
            </div>
        </div>
    )
}

export default PrincipalPage