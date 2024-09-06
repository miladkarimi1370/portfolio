import { FeedbackRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import CommentsSlider from "./CommentsSlider";


const Comments = ({ helmetTitle }) => {



    return (
        <>
            <Card sx={{ height: 100 + "vh", overflow: "scroll", backgroundColor: "whitesmoke", display: "flex", flexDirection: "column" }}>
                <HelmetProvider>
                    <Helmet>
                        <title>{helmetTitle}</title>
                    </Helmet>
                </HelmetProvider>
                <CardContent>
                    <CustomDivider
                        align={"center"}
                        bgColor={"success.main"}
                        cColor={"success"}
                        text={"نظرات کارشناسان"}
                        icon={<FeedbackRounded />}
                    />



                    <CommentsSlider />
                </CardContent>
            </Card>
        </>
    )
}

export default Comments;