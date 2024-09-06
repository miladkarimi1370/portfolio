import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import mainPicture from "../assets/mainDanzel.jpg";
import Typed from "typed.js";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { links } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet, HelmetProvider } from "react-helmet-async";



const Home = ({helmetTitle}) => {
    const nameEL = useRef(null);
    const [index, setIndex] = useState(0);
    const infoEL = useRef(null);
    const strings = [
        "دِنزِل هِیز واشینگتن جونیور",
        "بازیگر، کارگردان و تهیه‌کنندهٔ آمریکایی ",
        "برنده جایزهٔ اسکار، سه جایزهٔ گلدن گلوب و یک جایزهٔ تونی",
        "برابر ساز یک ، برابر ساز 2 ، برابر ساز 3 ، هفت دلاور و حصارها جزو برترین آثار من هستند"
    ]

    useEffect(() => {
        const typedName = new Typed(nameEL.current, {
            strings: ["[[دِنزِل واشینگتن ]]"],
            typeSpeed: 110,
            backSpeed: 50,
            backDelay: 80,
            showCursor: false
        })

        // const typedInfo = new Typed(infoEL.current, {
        //     strings,
        //     startDelay: 2500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // })

        const stringsTransition = setInterval(() => {
            setIndex((index) => index + 1);
        }, 3000)

        return () => {
            typedName.destroy();
            // typedInfo.destroy();
            clearInterval(stringsTransition);
        }
    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)

    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container);

    }, [])

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${mainPicture})`,
                    height: "100vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <HelmetProvider>
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                </HelmetProvider>
                <Particles init={particlesInit} loaded={particlesLoaded} id={"tsparticles"} options={links} />
                <Typography ref={nameEL} sx={{ textAlign: "center", color: "tomato", mb: 2 }} variant='h3'></Typography>
                <TextTransition springConfig={presets.slow} >
                    <Typography sx={{ textAlign: "center", color: "whitesmoke" }} variant='h4'>{strings[index % strings.length]}  </Typography>
                </TextTransition>
                <Typography variant="h4" color={"tomato"} sx={{ mt: 4, mr: 1 }}>***********</Typography>
            </Box>
        </>
    )
}

export default Home;