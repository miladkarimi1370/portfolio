import { SelfImprovementRounded, StarRateRounded } from "@mui/icons-material";
import { Card, CardContent, Grid, } from "@mui/material";


import Danzel from "../assets/forth.jpg";
import { CustomAvatar } from "../components/common";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { DevInfo, DevWorkCount, Skill } from "../components/pages";
import { CustomDivider } from "../components/common";



const About = ({ helmetTitle }) => {




    return (
        <>
            <Card sx={{ height: 100 + "vh", backgroundColor: "whitesmoke", overflowY: "scroll" }}>
                <CardContent>
                    <Grid container sx={{ m: 3 }}>
                        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                            <CustomDivider
                                align={"right"}
                                bgColor={"primary.main"}
                                cColor={"primary"}
                                icon={<StarRateRounded />}
                                text={"بازیگر ، کارگردان و تهیه کننده آمریکائی"}
                            />


                            <Grid container>
                                <Grid xs={4} sm={4} md={3} lg={3} xl={3} sx={{
                                    display: {
                                        xs: "none", sm: "block", md: "block"
                                    },
                                    mt: 3
                                }}>
                                    <DevWorkCount />

                                </Grid>
                                <Grid xs={8} sm={8} md={9} lg={9}>
                                 
                                    <DevInfo />
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                            <CustomAvatar
                                avatar={Danzel}
                                size={250}
                                fallback={"دو"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{ width: 1, mt: 1 }}>
                            <CustomDivider
                                align={"center"}
                                bgColor={"secondary.main"}
                                cColor={"secondary"}
                                icon={<SelfImprovementRounded />}
                                text={"مهارت های من"}
                            />

                            <Skill />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
            <HelmetProvider>
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
            </HelmetProvider>
        </>
    )
}

export default About;