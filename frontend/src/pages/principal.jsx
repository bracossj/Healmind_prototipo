import style from '../components/principal.module.css';
import stressQuestions from '../../../src/models/stress_questions.json';
import anxietyQuestions from '../../../src/models/anxiety_questions.json';
import depressionQuestions from '../../../src/models/depression_questions.json';
import { useAuth } from '../context/authContext.jsx';
import healbot from '../img/healbot.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function PrincipalPage() {

    const [selectedSection, setSelectedSection] = useState('inicio');
    const navigate = useNavigate();
    const handleSectionChange = (sectionId) => {
        if (sectionId === 'logout') {
            signout();
            navigate("/");
        } else {
            setSelectedSection(sectionId);
        }
    };

    const { signout } = useAuth();

    const [tiposPregunta, setTiposPregunta] = useState(['estrés', 'ansiedad', 'depresión']);
    const [respuestas, setRespuestas] = useState([]);
    const [tipoActual, setTipoActual] = useState('estrés');
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [preguntasPorTipo, setPreguntasPorTipo] = useState({
        estrés: [],
        ansiedad: [],
        depresión: [],
    });

    useEffect(() => {
        setPreguntasPorTipo({
            estrés: stressQuestions.preguntas,
            ansiedad: anxietyQuestions.preguntas,
            depresión: depressionQuestions.preguntas,
        });
    }, []);

    const handleRespuesta = (respuesta) => {
        const preguntaActual = preguntasPorTipo[tipoActual][indicePregunta].pregunta;
        const nuevaRespuesta = { pregunta: preguntaActual, respuesta };
        const nuevasRespuestas = [...respuestas, nuevaRespuesta];

        setRespuestas(nuevasRespuestas);

        if (indicePregunta < preguntasPorTipo[tipoActual].length - 1) {
            setIndicePregunta(indicePregunta + 1);
        } else {
            const indiceTipo = tiposPregunta.indexOf(tipoActual);
            if (indiceTipo < tiposPregunta.length - 1) {
                setTipoActual(tiposPregunta[indiceTipo + 1]);
                setIndicePregunta(0);
            } else {
                evaluarRespuestas(respuestas);
            }
        }
    };


    const evaluarRespuestas = (respuestas) => {
        console.log('Respuestas finales:', respuestas);

        const respuestasEstrés = respuestas.filter((respuesta) => respuesta.tipo === 'estrés');
        const respuestasAnsiedad = respuestas.filter((respuesta) => respuesta.tipo === 'ansiedad');
        const respuestasDepresión = respuestas.filter((respuesta) => respuesta.tipo === 'depresión');

        const preguntasEstrés = preguntasPorTipo.estrés.map((pregunta) => pregunta.pregunta);
        const preguntasAnsiedad = preguntasPorTipo.ansiedad.map((pregunta) => pregunta.pregunta);
        const preguntasDepresión = preguntasPorTipo.depresión.map((pregunta) => pregunta.pregunta);

        const umbralDiagnóstico = 4;

        const diagnóstico = {
            estrés: respuestasEstrés.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
            ansiedad: respuestasAnsiedad.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
            depresión: respuestasDepresión.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
        };

        console.log('Diagnóstico:', diagnóstico);
    };



    return (
        <div className={style.container}>
            <div className={style.navigation}>
                <ul>
                    <li>
                        <a href="#inicio" onClick={() => handleSectionChange('inicio')}>
                            <span className={style.icon}><ion-icon name="home-outline"></ion-icon></span>
                            <span className={style.tittle}>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#healbot" onClick={() => handleSectionChange('healbot')}>
                            <span className={style.icon}><ion-icon name="clipboard-outline"></ion-icon></span>
                            <span className={style.tittle}>HealBot</span>
                        </a>
                    </li>
                    <li>
                        <a href="#asesor" onClick={() => handleSectionChange('asesor')}>
                            <span className={style.icon}><ion-icon name="chatbubbles-outline"></ion-icon></span>
                            <span className={style.tittle}>Habla con un Profesional</span>
                        </a>
                    </li>
                    <li>
                        <a href="#historial" onClick={() => handleSectionChange('historial')}>
                            <span className={style.icon}><ion-icon name="document-text-outline"></ion-icon></span>
                            <span className={style.tittle}>Historial de diagnosticos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#logout" onClick={() => handleSectionChange('logout')}>
                            <span className={style.icon}><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className={style.tittle}>Cerrar sesión</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <section className={style.contenido} id="inicio" style={{ display: selectedSection === 'inicio' ? 'flex' : 'none' }}>
                    Inicio
                </section>
                <section className={style.contenido} id="healbot" style={{ display: selectedSection === 'healbot' ? 'flex' : 'none' }}>
                    <div className={style.chat_box}>
                        <div className={style.chat_chat}>
                            <h1 className={style.chat_header}>HealBot</h1>
                            <img className={style.botimg} src={healbot} alt="" />
                        </div>
                        <div className={style.chat_container}>
                            {indicePregunta < preguntasPorTipo[tipoActual].length && (
                                <div className={style.mensaje_asistente}>
                                    {preguntasPorTipo[tipoActual][indicePregunta].pregunta}
                                </div>
                            )}
                            {indicePregunta < preguntasPorTipo[tipoActual].length && (
                                <div className={style.opciones}>
                                    <button className={style.button} onClick={() => handleRespuesta('Sí')}>Sí</button>
                                    <button className={style.button} onClick={() => handleRespuesta('No')}>No</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className={style.contenido} id="asesor" style={{ display: selectedSection === 'asesor' ? 'flex' : 'none' }}>
                    asesor
                </section>
                <section className={style.contenido} id="historial" style={{ display: selectedSection === 'historial' ? 'flex' : 'none' }}>
                    historial
                </section>
                <section className={style.contenido} id="logout" style={{ display: selectedSection === 'logout' ? 'flex' : 'none' }}>
                    logout
                </section>
            </div>
        </div >

    )
}

export default PrincipalPage