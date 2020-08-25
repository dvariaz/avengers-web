import React from "react";

import styles from "./Home.module.scss";

import Background from "../../components/Background";
import TrapezoidButton from "../../components/UI/TrapezoidButton/index.js";

const HomePage = () => {
    return (
        <div className="Container SlidesContainer">
            <div className={`PageContent ${styles.SlideContent}`}>
                <img
                    className="Character"
                    style={{ transform: "translate(0px, 80px)" }}
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/CaptainAmerica.png`}
                />
                <img
                    className="Character"
                    style={{ transform: "translate(500px, 80px)" }}
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackWidow.png`}
                />
                <img
                    className="Character"
                    style={{ transform: "translate(-500px, 80px)" }}
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Wakanda/BlackPanther.png`}
                />
                <h1
                    className="BigTitle"
                    style={{ marginTop: "1rem", marginBottom: "2rem" }}
                >
                    INFINITY WAR
                </h1>
                <h2>
                    PREMIERE MUNDIAL <strong>23 DE ABRIL</strong> NO MÁS ESPERAS
                </h2>
                <p>La pelicula más esperada del momento está aqui</p>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                <Background src="Backgrounds/Wakanda/Wakanda.jpg" />
            </div>
            <div className={`PageContent ${styles.SlideContent}`}>
                <img
                    className="Character"
                    style={{
                        transform: "translate(-300px, -200px) scale(0.5)",
                    }}
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/Titan/Thanos.png`}
                />
                <h1 className="BigTitle">THANOS</h1>
                <h2>El titán loco ha llegado a por las gemas</h2>
                <h2>
                    <strong>El conquistador de mundos</strong>
                </h2>
                <p>La película más esperada del año esta aquí</p>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                <Background src="Backgrounds/Titan/Titan.jpg" />
            </div>

            <div
                className={`PageContent ${styles.SlideContent} ${styles.Center}`}
            >
                <h2>Nuevos equipos  se unirán para luchar</h2>
                <h2>
                    contra la <strong>inminente amenaza</strong>
                </h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                <Background src="Backgrounds/GuardiansSpaceship.jpg" />
            </div>
            <div
                className={`PageContent ${styles.SlideContent} ${styles.Center}`}
            >
                <img
                    className="Character"
                    style={{
                        transform: "translate(-300px, -200px) scale(0.5)",
                    }}
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/NewYorkSanctum/DoctorStrange.png`}
                />
                <h2>
                    Y harán todo lo posible para salvar el{" "}
                    <strong>destino de la humanidad</strong>
                </h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
                <Background src="Backgrounds/NewYorkSanctum/NewYorkSanctum.jpg" />
            </div>
        </div>
    );
};

export default HomePage;
