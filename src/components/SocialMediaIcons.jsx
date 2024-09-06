import { Facebook, GitHub, Instagram, Telegram } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const SocialMediaIcons = () => {
    return (
        <>
            <Box component={"div"} sx={{ m: "0 auto", textAlign: "center" }}>
                <IconButton aria-label="Git-hub">
                    <a href="https://github.com/Denzel-Washington" target="_blank" rel="noopener noreferrer"  >
                        <GitHub sx={{
                            color: grey[700]
                        }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Instagram">
                    <a href="https://www.instagram.com/denzelwashington.official/" target="_blank" rel="noopener noreferrer"  >
                        <Instagram sx={{
                            color: grey[700]
                        }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                    <a href="https://t.me/s/denzelwashiington?q=%23SHARE&before=1862" target="_blank" rel="noopener noreferrer"  >
                        <Telegram sx={{
                            color: grey[700]
                        }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Facebook">
                    <a href="https://www.facebook.com/groups/828491124919723/" target="_blank" rel="noopener noreferrer"  >
                        <Facebook sx={{
                            color: grey[700]
                        }} />
                    </a>
                </IconButton>
            </Box>
        </>
    )
}

export default SocialMediaIcons;