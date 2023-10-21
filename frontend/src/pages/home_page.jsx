import '../styles/home.css';
import logo from '../img/logo.png';
import { BiLogIn } from "react-icons/bi";


function HomePage() {

    return (
        <div>
            <nav className="navbarhome">
                <div className="title_logo">
                    <h1 className="titlehome">HealMind</h1>
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
            <div className="content">
                <section className="sec">
                    <h1 className="tittleshome">¿Que es la salud mental?</h1>
                    <h1 className="infoshome">
                        La salud mental es un estado de bienestar que permite a las personas hacer frente al estrés de la vida, desarrollar sus habilidades, aprender y trabajar bien, y contribuir a su comunidad.
                        En los estudiantes universitarios, la salud mental es especialmente importante, ya que se enfrentan a una serie de desafíos, como la presión académica, las relaciones sociales y la incertidumbre sobre el futuro.
                    </h1>
                </section>
                <section className="sec">
                    <h1 className="tittleshome">¿Por qué es importante?</h1>
                    <h1 className="infoshome">
                        La salud mental es importante para los estudiantes universitarios por las siguientes razones:
                    </h1>
                </section>
                <section className="sec">
                    <div className="section_disorders">
                        <div className="disorders">
                            <h1 className="tittleshome">Estrés</h1>
                            <h1 className="infoshome">
                                El estrés es común entre los estudiantes debido a la presión académica y social. Puede afectar el rendimiento académico y la calidad de vida. Ofrecemos apoyo y consejos para manejar el estrés.
                            </h1>
                        </div>

                        <div className="disorders">
                            <h1 className="tittleshome">Ansiedad</h1>
                            <h1 className="infoshome">
                                La ansiedad puede dificultar la concentración y la toma de decisiones. Nuestros servicios incluyen terapias y estrategias para reducir la ansiedad.
                            </h1>
                        </div>

                        <div className="disorders">
                            <h1 className="tittleshome">Depresión</h1>
                            <h1 className="infoshome">
                                La depresión puede ser debilitante y afectar la calidad de vida. Te ofrecemos recursos y apoyo para enfrentar la depresión de manera efectiva.
                            </h1>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage

