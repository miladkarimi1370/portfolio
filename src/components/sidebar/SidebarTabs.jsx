import { Tab, Tabs } from "@mui/material";

import React, { useContext } from "react";
import { grey } from "@mui/material/colors";
import MainContext from "../../Context";
import { tabsData } from "../../constants/tabsData";
import { useTheme } from "@emotion/react";


const SidebarTabs = () => {
    const theme = useTheme();
    const { pageNumber, handlePageNumber, setDrawerOpen } = useContext(MainContext);
    const data = tabsData();
    return (
        <>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons={"auto"}
                allowScrollButtonsMobile
                textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
                indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
                value={pageNumber}
                onChange={handlePageNumber}
            >
                {data.map((tab, index) => (
                    <Tab
                        key={index}
                        {...tab}
                        label={tab.labe}
                        icon={tab.icon}
                        onClick={() => setDrawerOpen(false)}
                        iconPosition="start"
                        sx={{
                            "&.MuiTab-root": {
                                minHeight: 50,
                                backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                                color: "text.primary",
                                borderRadius: 2,
                                my: 0.5,
                                mx: 1
                            }
                        }}

                    />
                ))}



            </Tabs>
        </>
    )
}

export default SidebarTabs;