import { LocalMoviesRounded } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { devEdu } from "../constants/details";

const DevExptimeLine = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])
    return (
        <>
            <Timeline position="right" sx={{ direction: "ltr" }}>
                {
                    devEdu.map((item, index) => (
                        <Slide direction="up" in={loading} style={{
                            transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                        }}>
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color="warning" variant="outlined">
                                        <LocalMoviesRounded color="warning" />
                                    </TimelineDot>
                                    {index !== 3 ? <TimelineConnector /> : null}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="caption" color={grey[700]}>{item.year}</Typography>
                                    <Typography variant="body1" color={"black"}>{item.cert}</Typography>
                                    <Typography variant="body2" color={"black"}>{item.major}</Typography>
                                    <Typography variant="body2" color={"black"}>{item.place}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Slide>

                    ))
                }
            </Timeline>
        </>
    )
}

export default DevExptimeLine;