import React, { useState, useEffect } from 'react';
import stressQuestions from '../../../src/models/stress_questions.json';
import anxietyQuestions from '../../../src/models/anxiety_questions.json';
import depressionQuestions from '../../../src/models/depression_questions.json';
import style from '../components/asistente.module.css';

function AsistentePage() {
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
        const nuevasRespuestas = [...respuestas, { tipo: tipoActual, respuesta }];
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

        const umbralDiagnóstico = 4;

        const diagnóstico = {
            estrés: respuestasEstrés.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
            ansiedad: respuestasAnsiedad.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
            depresión: respuestasDepresión.filter((respuesta) => respuesta.respuesta === 'Sí').length >= umbralDiagnóstico,
        };

        console.log('Diagnóstico:', diagnóstico);
    };

    return (
        <div className={style.fondo}>
            <div className={style.chat_box}>
                <div className={style.chat_chat}>
                    <h1 className={style.chat_header}>HealBot</h1>
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
            </div>
        </div>
    );
}

export default AsistentePage;