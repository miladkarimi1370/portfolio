import * as yup from "yup";

export const schema = yup.object().shape({
    fullName: yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: yup.string().email("ایمیل وارد اشتباه است").required("وارد کردن ایمیل الزامی است"),
    sbj: yup.string().required("وارد کردن عنوان الزامی است"),
    description: yup.string().required("متن پیام را وارد نمائید"),
    recaptcha: yup.string().required("وارد کردن رکپچا الزامی است")
})