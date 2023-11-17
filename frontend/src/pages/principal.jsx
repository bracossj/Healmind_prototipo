import style from '../components/principal.module.css';
import stressQuestions from '../../../src/models/stress_questions.json';
import anxietyQuestions from '../../../src/models/anxiety_questions.json';
import depressionQuestions from '../../../src/models/depression_questions.json';
import { useAuth } from '../context/authContext.jsx';
import healbot from '../img/healbot.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { guardarDiagnostico, obtenerDiagnosticos } from '../api/historial.js';
import { obtenerProfesionales } from '../api/auth.js';

function PrincipalPage() {
    const { signout, user } = useAuth();
    const [selectedSection, setSelectedSection] = useState('inicio');
    const navigate = useNavigate();
    const handleSectionChange = (sectionId) => {
        if (sectionId === 'logout') {
            signout();
            navigate("/");
        } else {
            setRespuestas([]);
            setTipoActual('estrés');
            setIndicePregunta(0);
            setDiagnóstico(null);
            setSelectedSection(sectionId);
        }
    };
    const [tiposPregunta, setTiposPregunta] = useState(['estrés', 'ansiedad', 'depresión']);
    const [respuestas, setRespuestas] = useState([]);
    const [tipoActual, setTipoActual] = useState('estrés');
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [preguntasPorTipo, setPreguntasPorTipo] = useState({
        estrés: [],
        ansiedad: [],
        depresión: [],
    });
    const [diagnóstico, setDiagnóstico] = useState(null);
    const handleRespuesta = (respuesta) => {
        const preguntaActual = preguntasPorTipo[tipoActual][indicePregunta].pregunta;
        const nuevaRespuesta = { pregunta: preguntaActual, respuesta, tipo: tipoActual };
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
        const respuestasEstrés = respuestas.filter((respuesta) => respuesta.tipo === 'estrés');
        const respuestasAnsiedad = respuestas.filter((respuesta) => respuesta.tipo === 'ansiedad');
        const respuestasDepresión = respuestas.filter((respuesta) => respuesta.tipo === 'depresión');
        const umbralDiagnóstico = 4;

        const contarRespuestasPositivas = (respuestas) => {
            return respuestas.filter((respuesta) => respuesta.respuesta === 'Sí').length;
        };

        const nuevoDiagnóstico = {
            estrés: contarRespuestasPositivas(respuestasEstrés) >= umbralDiagnóstico,
            ansiedad: contarRespuestasPositivas(respuestasAnsiedad) >= umbralDiagnóstico,
            depresión: contarRespuestasPositivas(respuestasDepresión) >= umbralDiagnóstico,
        };

        setDiagnóstico(nuevoDiagnóstico);
    };
    const handleGuardarDiagnostico = async () => {
        try {
            const preguntas = respuestas.map((respuesta) => ({
                pregunta: respuesta.pregunta,
                respuesta: respuesta.respuesta,
            }));
            const diagnósticoX = Object.keys(diagnóstico).map((tipo) => ({
                tipo,
                resultado: diagnóstico[tipo],
            }));
            await guardarDiagnostico(user.id, preguntas, diagnósticoX);
        } catch (error) {
            console.error('Error al guardar el diagnóstico:', error);
        }
    };

    useEffect(() => {
        setPreguntasPorTipo({
            estrés: stressQuestions.preguntas,
            ansiedad: anxietyQuestions.preguntas,
            depresión: depressionQuestions.preguntas,
        });
    }, [user]);

    useEffect(() => {
        if (diagnóstico !== null) {
            setSelectedSection('healbotresult');
            handleGuardarDiagnostico();
        }
    }, [diagnóstico]);

    if (user === null) {
        window.location.reload();
    }

    const [diagnosticos, setDiagnosticos] = useState([]);
    useEffect(() => {
        const cargarDiagnosticos = async () => {
            try {
                const response = await obtenerDiagnosticos(user.id);
                setDiagnosticos(response.diagnosticos);
            } catch (error) {
                console.error('Error al cargar el historial de diagnósticos:', error);
            }
        };

        cargarDiagnosticos();
    }, [user.id, selectedSection]);

    function formatDate(dateTimeString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const formattedDate = new Date(dateTimeString).toLocaleDateString('es-ES', options);
        return formattedDate;
    }

    const [profesionales, setProfesionales] = useState([]);
    useEffect(() => {
        const cargarProfesionales = async () => {
            try {
                const response = await obtenerProfesionales();
                setProfesionales(response);
            } catch (error) {
                console.error('Error al cargar la lista de profesionales:', error);
            }
        };
        if (selectedSection === 'asesor') {
            cargarProfesionales();
        }
    }, [selectedSection]);


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
                <section className={style.contenidodeinicio} id="inicio" style={{ display: selectedSection === 'inicio' ? 'flex' : 'none' }}>
                    <h1 className={style.iniciotitulo}>
                        {'Bienvenid@ ' + user.name}
                    </h1>
                    <div className={style.boxsaludo}>
                        <h1>El adolescente vive una etapa de adaptación a los cambios vertiginosos, que representa una etapa crítica en el inicio y fortalecimiento de conductas de riesgo. El objetivo fue describir la producción científica indexada en la base de datos Scopus sobre el tema de salud mental en adolescentes universitarios desde 2018-2020 en Latinoamérica. La metodología fue una revisión exhaustiva de artículos, utilizando términos como: salud mental, estrés, ansiedad e ideación suicida. Los criterios incluidos fueron: año, idioma, metodología, instrumentos validados, resultados y conclusión. Los resultados evidenciaron 11 artículos sobre Salud Mental. Asimismo, la revisión de la literatura pone de manifiesto que el sexo femenino tiene mayor vulnerabilidad en comparación con los del sexo masculino para desarrollar diferentes trastornos mentales, lo que amerita realizar un seguimiento oportuno e incentivar programas específicos de promoción y prevención de la salud mental en adolescentes universitarios para elevar su potencial humano</h1>
                    </div>
                </section>
                <section className={style.contenidohealbot} id="healbot" style={{ display: selectedSection === 'healbot' ? 'flex' : 'none' }}>
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
                <section className={style.contenidoresult} id="healbotresult" style={{ display: selectedSection === 'healbotresult' ? 'flex' : 'none' }}>
                    <div className={style.chat_boxR}>
                        <h1 className={style.resultadodiagnostico}>
                            {diagnóstico && (
                                <>
                                    {diagnóstico.estrés || diagnóstico.ansiedad || diagnóstico.depresión
                                        ? 'Oh no, parece que padeces de:'
                                        : '¡Felicidades! Estás mentalmente sano. Regresa en 1 o 2 semanas para aplicarte otro diagnóstico.'}

                                    {diagnóstico.estrés && <div>Estrés</div>}

                                    {diagnóstico.ansiedad && <div>Ansiedad</div>}

                                    {diagnóstico.depresión && <div>Depresión</div>}
                                </>
                            )}
                        </h1>
                    </div>
                </section>
                <section className={style.contenidoprofesionales} id="asesor" style={{ display: selectedSection === 'asesor' ? 'flex' : 'none' }}>
                    <h1 className={style.tituloprofesionales}>Profesionales Disponibles</h1>
                    <div className={style.profesionalesContainer}>
                        {profesionales.map((profesional, index) => (
                            <div className={style.profesionalCard} key={index}>
                                <p>{profesional.name} {profesional.lastname}</p>
                                <p>{profesional.email}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={style.contenidohistorial} id="historial" style={{ display: selectedSection === 'historial' ? 'flex' : 'none' }}>
                    <h1 className={style.titulohistorial}>Historial de diagnósticos</h1>
                    <div className={style.diagnosticoenhistorial}>
                        <ul>
                            {diagnosticos.map((diagnostico, index) => (
                                <li key={index}>
                                    <p>Fecha: {formatDate(diagnostico.fecha)}</p>
                                    <p>Preguntas:</p>
                                    <ul>
                                        {diagnostico.preguntas.map((pregunta, index) => (
                                            <li key={index}>{pregunta.pregunta}: {pregunta.respuesta}</li>
                                        ))}
                                    </ul>
                                    <p>Diagnóstico:</p>
                                    <ul>
                                        {diagnostico.diagnóstico.map((item, index) => (
                                            <li key={index}>{item.tipo}: {item.resultado ? 'Sí' : 'No'}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section id="logout" style={{ display: selectedSection === 'logout' ? 'flex' : 'none' }}></section>
            </div>
        </div >
    )
}

export default PrincipalPage