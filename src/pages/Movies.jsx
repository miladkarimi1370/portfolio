import { EmojiEventsRounded } from "@mui/icons-material";
import { Card, CardContent, Grid } from "@mui/material";

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import ShowMovies from "./ShowMovies";

const Movies = ({ helmetTitle }) => {

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
                        text={"فیلم های من"}
                        bgColor={"primary.main"}
                        cColor={"primary"}
                        icon={<EmojiEventsRounded />}
                    />


                    <Grid container sx={{ mx: 3 }}>
                        <ShowMovies />
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Movies;