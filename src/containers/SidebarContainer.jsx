import { useTheme } from "@emotion/react";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";


import React from "react";

const SidebarContainer = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400] ,
                height: "100vh",
                overflowY: "auto",
                overflowX: "hidden"
            }}>
                {children}
            </Grid>
        </>
    )
}

export default SidebarContainer;