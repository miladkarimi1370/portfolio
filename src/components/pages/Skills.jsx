import { Badge, Box, Chip, Divider, LinearProgress, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const Skills = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider textAlign="right"
                sx={{
                    "&::before , &::after": {
                        borderColor: `${color}.main`
                    } ,
                    mt : 3
                }}
            >
                <Chip color={color} sx={{ p: 3, color: "#000", fontWeight: "bold" }} label={name} icon={<Box component={"img"} src={icon} sx={{ height: 30 }} />} />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }} >
                <Box sx={{ minWidth: 35 , mr : 1 }} >
             
               
               
                  <Typography variant="body2" color={grey[700]}>
                  <Badge variant="standard" color={color} badgeContent={`${Math.round(value)} %`} />

                  </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress variant="determinate" value={value} color={color} sx={{ height: 10, borderRadius: 2 }} />
                </Box>
            </Box>
        </>
    )
}

export default Skills;