import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { EmojiEventsRounded, LocalMoviesRounded, SchoolRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import DevExptimeLine from "./DevExpTimeLine";
import DevEduTimeLine from "./DevEduTimeLine";

const Resume = ({ helmetTitle }) => {

    return (
        <>
            <Card sx={{ height: 100 + "vh", overflow: "scroll", backgroundColor: "whitesmoke" }}>
                <HelmetProvider>
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                </HelmetProvider>
                <CardContent>

                    <CustomDivider
                        align={"center"}
                        cColor={"foreground"}
                        icon={<EmojiEventsRounded />}
                        text={"شناخت بهتر من"}
                        bgColor={"error.main"}
                    />



                    <Grid container sx={{ mt: 4 }}>

                        <Grid xs={6}>
                            <CustomDivider
                                align={"center"}
                                icon={<LocalMoviesRounded />}
                                cColor={"foreground"}
                                text={"تجارت کاری من"}
                                bgColor={"warning"}
                            />



                            <DevExptimeLine />
                        </Grid>
                        <Grid xs={6}>
                            <CustomDivider
                                align={"center"}
                                cColor={"info"}
                                text={"تحصیلات من"}
                                icon={<SchoolRounded />}
                                bgColor={"info.main"}
                            />



                            <DevEduTimeLine />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Resume;