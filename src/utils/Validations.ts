import * as Yup from 'yup'

export const otpVerficationScheme = Yup.object().shape({
    otp: Yup.string().trim().min(6).required('Otp is required')
})