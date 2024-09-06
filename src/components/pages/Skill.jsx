import React, { useEffect, useState } from "react";
import { ActorSkills } from "../../constants/skills";
import Skills from "./Skills";

const Skill = () => {
    const { actingSkills, directorySkills, producerSkills, successfullySkills, writerSkills } = ActorSkills;
    const [acting, setActing] = useState(0);
    const [directory, setDirectory] = useState(0);
    const [producer, setProducery] = useState(0);
    const [successfully, setSuccessfully] = useState(0);
    const [writer, setWritery] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActing(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);
            });
            setDirectory(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75)
            });
            setProducery(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75)
            });
            setSuccessfully(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 92)
            });
            setWritery(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 61)
            });
        }, 200);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>

            <Skills name={actingSkills.name} color={actingSkills.color} icon={actingSkills.icon} value={Math.round(acting)} />
            <Skills name={directorySkills.name} color={directorySkills.color} icon={directorySkills.icon} value={Math.round(directory)} />
            <Skills name={producerSkills.name} color={producerSkills.color} icon={producerSkills.icon} value={Math.round(producer)} />
            <Skills name={successfullySkills.name} color={successfullySkills.color} icon={successfullySkills.icon} value={Math.round(successfully)} />
            <Skills name={writerSkills.name} color={writerSkills.color} icon={writerSkills.icon} value={Math.round(writer)} />

        </>
    )
}

export default Skill;