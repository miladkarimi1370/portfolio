import { CopyrightRounded, FavoriteBorderRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const SidebarFooter = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "center", height: 100 }}>
                <Typography variant="subtitle2" color="text.primary">طراحی شده با {" "}  <FavoriteBorderRounded sx={{ verticalAlign: "middle", color: "red", height: 20 }} /> برای دنزل واشینگتن {" "} </Typography>
                <Typography variant="caption" color="text.primary">
                    کپی رایت 1403 {" "} <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
                </Typography>
            </Box>
        </>
    )
}

export default SidebarFooter;