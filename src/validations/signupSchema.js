import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),

    username: yup
        .string()
        .required("Username is required")
        .min(6),
    email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),

    password: yup.string().required('Password is required').min(6),
    term: yup.boolean().oneOf([true], "Must Agree with the term & policy")

})