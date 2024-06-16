import { useFormik, type FormikProps } from "formik";
import { useRef } from "react";
import { otpVerficationScheme } from "../../utils/Validations";

interface OtpFormValues {
    otp: string;
}

const useOtpFormik = () => {
    const refOtpVerificationDispatch = useRef<any>()
    const otpVerficationFormik: FormikProps<OtpFormValues> = useFormik<OtpFormValues>({
        initialValues: {
            otp: ''
        },
        validationSchema: otpVerficationScheme,
        onSubmit: (values: OtpFormValues) => {
            refOtpVerificationDispatch.current = ''
            //Api call
            // refOtpVerificationDispatch.current = dispatch(AuthActions.otpVerificationRequest(

            // ))
            refOtpVerificationDispatch?.current?.unwrap().then((data) => {
                console.log(data)
            })
        }
    })
    return {
        otpVerficationFormik
    }
}

export default useOtpFormik;