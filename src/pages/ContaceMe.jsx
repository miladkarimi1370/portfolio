
import { AccountCircle } from "@mui/icons-material";
import worldMap from "../assets/map.svg";
import { Card, CardContent, Grid, Slide, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import ContactForm from "./ContactForm";


const ConaceMe = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])






    return (
        <>
            <Card sx={{
                height: 100 + "vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column"
            }}>
                <HelmetProvider>
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                </HelmetProvider>
                <CardContent>
                    <CustomDivider
                        align={"center"}
                        bgColor={"warnign.main"}
                        cColor={"warning"}
                        text={"ارتباط با من"}
                        icon={<AccountCircle />}
                    />

                    <Grid container sx={{ mt: 5 }}>
                        <Slide direction="up" in={loading} style={{
                            transitionDelay: loading ? "200ms" : "0ms"
                        }}>
                            <Grid xs={12} sm={12} md={8} >
                                <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                    <ContactForm />
                                </Card>
                            </Grid>
                        </Slide>
                        <Slide direction="up" in={loading} style={{
                            transitionDelay: loading ? "200ms" : "0ms"
                        }}>
                            <Grid
                                xs={0}
                                sm={0}
                                md={4}
                                sx={{
                                    textAlign: "center",
                                    backgroundImage: `url(${worldMap})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center"
                                }}
                            >
                                <Typography variant="h6" color="black" sx={{
                                    fontFamily: "Vazir", mt: 4, display: {
                                        xs: "none", sm: "none", md: "block"
                                    }
                                }}>
                                    بیا در مورد همه چیز با هم صحبت کنیم
                                </Typography>
                                <Typography variant="body1" color="black" sx={{
                                    mt: 2,
                                    display: {
                                        sm: "none",
                                        md: "block"
                                    }
                                }}>
                                    <a href="danzel@gmail.com" target="_blank" alt="email" style={{
                                        color: "tomato"
                                    }}>
                                        ایمیل
                                    </a>
                                    {" "} بزن به من
                                </Typography>
                            </Grid>
                        </Slide>
                    </Grid>
                </CardContent >
            </Card >
        </>
    )
}

export default ConaceMe;