import { EmailRounded, Face6Rounded, SubjectRounded } from "@mui/icons-material";
import { Button, CardActions, CardContent, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { schema } from "../validations/contactValidationSchema";
import { useTheme } from "@emotion/react";

const ContactForm = () => {
    const theme = useTheme();
    const contactInputsNames = {
        fullName: "",
        email: "",
        sbj: "",
        description: "",
        recaptcha: ""
    }


    const formik = useFormik({
        initialValues: contactInputsNames,
        onSubmit: (values) => {
            console.log("Form Values : ", values);

        },
        validationSchema: schema
    })

    return (
        <>
            <form autoComplete="off" onSubmit={formik.handleSubmit} >
                <CardContent>
                    <Grid container>
                        <Grid xs={12} sx={{ direction: "ltr" }}>
                            <Grid container spacing={2} sx={{ p: 3 }}>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        color="warning"
                                        label="نام و نام خانوادگی"
                                        name="fullName"
                                        variant="outlined"
                                        helperText={
                                            formik.touched.fullName ? formik.errors.fullName : null
                                        }
                                        error={Boolean(
                                            formik.touched.fullName && formik.touched.fullName
                                        )}
                                        value={formik.values?.fullName}
                                        onChange={formik.handleChange}
                                        inputProps={{
                                            endAdorment: (
                                                <InputAdornment position="end" >
                                                    <Face6Rounded />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        color="warning"
                                        label="آدرس ایمیل"
                                        name="email"
                                        variant="outlined"
                                        helperText={
                                            formik.touched.email ? formik.errors.email : null
                                        }
                                        error={Boolean(
                                            formik.touched.email && formik.touched.email
                                        )}
                                        value={formik.values?.email}
                                        onChange={formik.handleChange}
                                        inputProps={{
                                            endAdorment: (
                                                <InputAdornment position="end" >
                                                    <EmailRounded />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        color="warning"
                                        label="عنوان"
                                        name="sbj"
                                        variant="outlined"
                                        helperText={
                                            formik.touched.sbj ? formik.errors.sbj : null
                                        }
                                        error={Boolean(
                                            formik.touched.sbj && formik.touched.sbj
                                        )}
                                        value={formik.values?.sbj}
                                        inputProps={{
                                            endAdorment: (
                                                <InputAdornment position="end" >
                                                    <SubjectRounded />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} md={12} sx={{ mt: 1 }}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={10}
                                        size="small"
                                        color="warning"
                                        label="متن پیام"
                                        name="description"
                                        variant="outlined"
                                        helperText={
                                            formik.touched.description ? formik.errors.description : null
                                        }
                                        error={Boolean(
                                            formik.touched.description && formik.touched.description
                                        )}
                                        value={formik.values?.description}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        theme={theme.palette.mode}
                        hl="fa"
                        onChange={(value) => {
                            formik.setFieldValue("recaptcha", value)
                        }}
                    />
                    {
                        formik.errors.recaptcha && formik.touched.recaptcha &&
                        (
                            <Typography variant="caption" color="error">
                                {formik.errors.recaptcha}
                            </Typography>
                        )
                    }
                    <Button variant="contained" type="submit" color="success" fullWidth>ارسال کن</Button>
                </CardActions>
            </form>
        </>
    )
}

export default ContactForm;