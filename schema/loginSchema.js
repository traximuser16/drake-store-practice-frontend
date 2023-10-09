import * as Yup from 'yup'

const loginSchema = new Yup.object({
    email   :Yup.string().email().trim().required("Email is required"),
    password:Yup.string().trim().required('Password is required'),
})

export default loginSchema