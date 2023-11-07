import style from '../components/principal.module.css';
import React, { useState } from 'react';

function PrincipalPage() {

    const [selectedSection, setSelectedSection] = useState('inicio');

    const handleSectionChange = (sectionId) => {
        setSelectedSection(sectionId);
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
            <div className={style.contenido}>
                <section id="inicio" style={{ display: selectedSection === 'inicio' ? 'block' : 'none' }}>
                    Inicio
                </section>
                <section id="healbot" style={{ display: selectedSection === 'healbot' ? 'block' : 'none' }}>
                    healbot
                </section>
                <section id="asesor" style={{ display: selectedSection === 'asesor' ? 'block' : 'none' }}>
                    asesor
                </section>
                <section id="historial" style={{ display: selectedSection === 'historial' ? 'block' : 'none' }}>
                    historial
                </section>
                <section id="logout" style={{ display: selectedSection === 'logout' ? 'block' : 'none' }}>
                    logout
                </section>
            </div>
        </div >
    )
}

export default PrincipalPage