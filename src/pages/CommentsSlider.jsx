import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { userComments } from "../constants/details";

const CommentsSlider = () => {

    const options = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        easing: "linear"
    }

    return (
        <>
            <Box component={"div"} sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}>
                <Slider {...options}>
                    {userComments.map((user, index) => (
                        <Box key={index} component={"div"} sx={{ justifyContent: "center" }}>
                            <Avatar
                                variant="rounded"
                                src={user.avatar}
                                sx={{
                                    height: "100",
                                    width: "100",
                                    margin: "0 auto"
                                }}
                            />
                            <Typography variant="body1" textAlign={"center"} color="black">{user.fullName}</Typography>
                            <Typography variant="body2" textAlign={"center"} color="black" sx={{ mb: 2 }}>{user.jobTitle}</Typography>
                            <Card sx={{ backgroundColor: "lightsalmon", width: 1 / 2, m: "0 auto", borderRadius: 5 }}>
                                <CardContent>
                                    <Typography variant="body2" textAlign={"center"}>
                                        {user.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Slider>

            </Box>
        </>
    )
}

export default CommentsSlider;