import { Chip, Divider, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CustomDivider = ({ align, bgColor, cColor, text , icon }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])
    return (
        <>
            <Slide direction="up" in={loading} style={{
                transitionDelay: loading ? "200ms" : "0ms"
            }}>
                <Divider variant="middle" textAlign={align} sx={{
                    "&::before , &::after": {
                        borderColor: bgColor
                    }
                }}  >
                    <Chip icon={icon} color={cColor} label={
                        <Typography variant="body1" color="black" sx={{ textAlign: "center" }}>{text}</Typography>
                    }
                        sx={{ p: 3 }}
                    />
                </Divider>
            </Slide>
        </>
    )
}

export default CustomDivider;