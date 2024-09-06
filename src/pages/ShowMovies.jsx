import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import { moveis } from "../constants/movies";

const ShowMovies = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, [])
    return (
        <>
            {moveis.map((film, index) => (
                <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{ px: 4, my: 2 }}>
                    <Slide direction="up" in={loading} style={{
                        transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                    }}>
                        <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                            <CardActionArea>
                                <CardMedia
                                    component={"img"}
                                    height={"400"}
                                    width={"200"}
                                    src={film.image}
                                    alt={film.title}
                                />
                                <CardContent>
                                    <Typography variant="body1" textAlign={"left"} gutterBottom>{film.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"} gutterBottom sx={{ direction: "ltr" }}>
                                        <EllipsisText text={film.info} length={"100"} />

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href={film.link} size="small" color="primary" target="_blank">اطلاعات بیشتر</Button>
                            </CardActions>
                        </Card>
                    </Slide>
                </Grid>
            ))}
        </>
    )
}

export default ShowMovies;