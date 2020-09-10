import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

const Header = ({ logo, sections }) => {
    const { pathname } = useLocation();
    const currentSection = pathname.split("/")[1];

    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.15,
            },
        },
        hidden: {
            opacity: 0,
            x: "100%",
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const linkVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 15,
            },
        },
        hidden: {
            opacity: 0,
            x: 500,
            transition: {
                type: "spring",
                damping: 15,
            },
        },
    };

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header className={styles.Header}>
                <div className={styles.Logo}>
                    <Link to="/">
                        <img src={logo} alt="Logo"></img>
                    </Link>
                </div>
                <div className={styles.Sections}>
                    {sections.map((section, index) => (
                        <Link
                            key={index}
                            to={section.url}
                            className={currentSection === "" ? "active" : ""}
                        >
                            {section.name}
                        </Link>
                    ))}
                </div>
                <button className={styles.SidebarButton} onClick={handleClick}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/Icons/Navigation/Menu-Icon.svg`}
                        alt="Menu"
                    ></img>
                </button>
            </header>
            <motion.div
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                variants={menuVariants}
                className={styles.Menu}
            >
                {sections.map((section, index) => (
                    <motion.div variants={linkVariants}>
                        <Link
                            key={index}
                            to={section.url}
                            className={currentSection === "" ? "active" : ""}
                        >
                            {section.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default Header;
