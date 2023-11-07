import style from '../components/home.module.css';
import logo from '../img/logo.png';
import s1img from '../img/sec1.webp';
import s2img from '../img/sec2.png';
import estresimg from '../img/estres.png';
import ansiedadimg from '../img/ansiedad.png';
import depresionimg from '../img/depresion.png';

function HomePage() {

    return (
        <div className={style.HomePage}>
            <header className={`${style.header} ${style.fixedHeader}`}>
                <div className={style.logo}>
                    <img className={style.logoimg} src={logo} alt="" />
                    <h2 >HealMind</h2>
                </div>
                <nav className={style.nav}>
                    <ul>
                        <li><a className={style.navbuttons} href="#inicio">Inicio</a></li>
                        <li><a className={style.navbuttons} href="#importancia">Importancia</a></li>
                        <li><a className={style.navbuttons} href="#trastornos">Trastornos</a></li>
                        <a className={style.buttoningresar} href="/auth">Ingresar<ion-icon name="log-in"></ion-icon></a>
                    </ul>
                </nav>
            </header>
            <section id="inicio" className={`${style.sections} ${style.section1}`}>
                <p>HealMind es tu aliado para una salud mental óptima. Nuestra plataforma te ayudara a identificar si tienes algun trastorno, especialmente si eres estudiante universitario. En HealMind, creemos en el poder de la mente para alcanzar tu máximo potencial.</p>
                <div className={style.imgytext}>
                    <div className={style.circulo}>
                        <img className={style.imgsec1} src={s1img} alt="" />
                    </div>
                    <h1>Cuida tu mente, cuida tu futuro</h1>
                </div>
            </section>
            <section id="importancia" className={`${style.sections} ${style.section2}`}>
                <div className={style.questionsec2}>
                    <div className={style.circulo2}>
                        <img className={style.imgsec2} src={s2img} alt="" />
                    </div>
                    <h1>¿Por qué es importante la salud mental para los estudiantes universitarios?</h1>
                </div>
                <p>La buena salud mental es esencial para el éxito académico y personal de los estudiantes universitarios. Los estudiantes con buena salud mental tienen más probabilidades de tener éxito en sus estudios, establecer relaciones saludables y participar en actividades sociales.
                    Los trastornos de salud mental pueden tener un impacto significativo en la vida de los estudiantes universitarios. Pueden interferir con sus estudios, relaciones y bienestar general. Si te sientes estresado, ansioso o deprimido, es importante que busques ayuda.</p>
            </section>
            <section id="trastornos" className={`${style.sections} ${style.section3}`}>
                <h1 className={style.tittletrastornos}>Trastornos</h1>
                <div className={style.trastornos}>
                    <div className={style.cards}>
                        <div className={`${style.face} ${style.front}`}>
                            <img src={estresimg} alt="" />
                            <h1>Estres</h1>
                        </div>
                        <div className={`${style.face} ${style.back}`}>
                            <h3>Estres</h3>
                            <p>Es una respuesta natural del cuerpo a situaciones desafiantes o amenazantes, que puede surgir en estudiantes universitarios debido a la presión académica y los plazos de entrega, causando tensión y dificultades de concentración.</p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={`${style.face} ${style.front}`}>
                            <img src={ansiedadimg} alt="" />
                            <h1>Ansiedad</h1>
                        </div>
                        <div className={`${style.face} ${style.back}`}>
                            <h3>Ansiedad</h3>
                            <p>Se caracteriza por una preocupación excesiva sobre el futuro, lo que puede generar inquietud y nerviosismo en estudiantes universitarios, a menudo relacionada con el rendimiento académico y las expectativas.</p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <div className={`${style.face} ${style.front}`}>
                            <img src={depresionimg} alt="" />
                            <h1>Depresion</h1>
                        </div>
                        <div className={`${style.face} ${style.back}`}>
                            <h3>Depresion</h3>
                            <p>Esta implica sentimientos persistentes de tristeza y desesperación, llevando a la pérdida de interés en las actividades diarias y una disminución de la autoestima en estudiantes universitarios, afectando su calidad de vida y rendimiento académico.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage

