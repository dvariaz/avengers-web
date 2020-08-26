import React from "react";
import { motion } from "framer-motion";

import TrapezoidButton from "../../../../components/UI/TrapezoidButton/index.js";

const NYSanctumSection = () => {
    let transition = {
        duration: 0.8,
    };

    let drStrangeVariants = {
        enter: {
            x: 0,
            y: 100,
            scale: 1.1,
            transition,
        },
        exit: {
            x: 0,
            y: 250,
            scale: 1.1,
            transition,
        },
    };

    return (
        <section className={`PageContent SlideContent`}>
            <motion.img
                className="Character"
                initial="exit"
                animate="enter"
                variants={drStrangeVariants}
                src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/NewYorkSanctum/DoctorStrange.png`}
            />
            <h1 className="BigTitle" style={{ fontSize: "9em", top: "1em" }}>
                DOCTOR STRANGE
            </h1>
            <div className="TextContainer">
                <h2>Y harán todo lo posible para salvar el futuro de la humanidad</h2>
                <TrapezoidButton to="trailer">VER TRAILER</TrapezoidButton>
            </div>
            <div className="Background">
                <img
                    src={`${process.env.PUBLIC_URL}/Assets/Backgrounds/NewYorkSanctum/NewYorkSanctum.jpg`}
                />
            </div>
        </section>
    );
};

export default NYSanctumSection;
