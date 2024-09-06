import { Box, Divider } from "@mui/material";
import React from "react";

import { SidebarFooter, SidebarHeader, SidebarTabs } from ".";


const SidebarContent = () => {


    return (
        <>
            <Box sx={{ textAlign: "center", justifyContent: 'center', mt: 2 }}>

                <SidebarHeader />
                <Divider variant="middle" />

                <SidebarTabs />
                <Divider variant="middle" sx={{ mt: 2 }} />
            </Box>
            <SidebarFooter />
        </>
    )
}

export default SidebarContent;