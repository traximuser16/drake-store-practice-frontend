import * as Yup from "yup"

const signupSchema = new Yup.object({
    email: Yup.string().email().trim().required("Email is required"),
    password: Yup.string().trim().required('Password is required'),
    passwordConfirmation: Yup.string().trim()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default signupSchema