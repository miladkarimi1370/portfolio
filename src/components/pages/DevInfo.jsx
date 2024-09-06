import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const Info = ({ info, children }) => {
    return (
        <>
            <Typography variant="body1" color={"black"} textAlign={"left"} sx={{ mt: 2 }}>
                {children}
                <KeyboardArrowLeftRounded sx={{ verticalAlign: "middle", color: "primary.main", width: 30 }} />
            </Typography>
        </>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : دِنزِل هِیز واشینگتن جونیور</Info>
            <Info>سن : 70 سال</Info>
            <Info>زاده : شهر مونت ورنون ( یکی از ایالت های آمریکا )</Info>
            <Info>danzelWashington@gmail.com : آدرس ایمیل</Info>
            <Info>اولین حضور حرفه ای در صحنه : در سال 1976</Info>
        </>
    )
}

export default DevInfo;