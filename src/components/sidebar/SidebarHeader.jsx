import {  Typography } from "@mui/material";
import React, { useState } from "react";
import avatar from "../../assets/denzel-hayes-washington-02.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabePersian";

import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
import SocialMediaIcons from "../SocialMediaIcons";
const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback={"دو"}
            />





            <Typography variant="h6" color={"primary"}>
                <Typography variant="caption" color={"tomato"}>{" {{ "}</Typography>
                <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} characters={"دنزل واشینگتن"} onComplete={() => setStart(true)} />
                <Typography variant="caption" color={"tomato"}>{" }} "}</Typography>
            </Typography>
            {start &&
                <Typography variant="caption" color={"gray"}>
                    <Typography variant="caption" color={"tomato"}>{"[["}</Typography>
                    <RandomReveal isPlaying duration={3} characterSet={alphabetPersian} characters={"بازیگر ، نویسنده و کارگردان"} />
                    <Typography variant="caption" color={"tomato"}>{"]]"}</Typography>
                </Typography>
            }


            <SocialMediaIcons />
        </>
    )
}

export default SidebarHeader;