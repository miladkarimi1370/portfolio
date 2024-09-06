import { CacheProvider } from "@emotion/react";
import { Grid, ThemeProvider } from "@mui/material";
import React from "react";

import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";


import { darkTheme , lightTheme } from "./theme";


const MainLayout = ({ children , mode }) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;
    const cacheRTL = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    })
    return (
        <>
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>


                    <Grid container sx={{ height: 100 + "vh" }}>
                        {children}
                    </Grid>


                </ThemeProvider>
            </CacheProvider>
        </>
    )
}

export default MainLayout;