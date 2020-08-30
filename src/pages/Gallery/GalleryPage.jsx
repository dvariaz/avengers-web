import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import Background from "../../components/Background";
import ActorProfile from "./ActorProfile";
import ActorNav from "./ActorNav";

// import styles from './Gallery.module.scss';
import cast from "../../context/default/cast";

const GalleryPage = () => {
    const { actor } = useParams();
    const [memberData, setMemberData] = useState(null);

    useEffect(() => {
        const [data] = cast.filter((member) => member.id === actor);
        setMemberData(data);
    }, [actor]);

    if (memberData) {
        return (
            <div className="Container Respect-TopBar Respect-AllBars">
                {/* <motion.div initial="hidden" animate="visible" variants={variants}> */}
                <ActorNav index={"05"} name={memberData.name} color={memberData.color} />
                <ActorProfile
                    name={memberData.name}
                    score={memberData.score}
                    role={memberData.role}
                />
                <Background src={memberData.background} />
                {/* </motion.div> */}
            </div>
        );
    } else {
        return (
            <div className="Container Respect-TopBar Respect-AllBars">
                <h1 style={{ color: "white" }}>Cargando</h1>
            </div>
        );
    }
};

export default GalleryPage;
