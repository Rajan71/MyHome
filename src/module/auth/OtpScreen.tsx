import React, { useRef, useState, createContext, useContext, ForwardedRef, RefObject } from "react";
import { View, Image, Text } from 'react-native';
import styles from "./OtpStyles";
import useOtpVerification from "./useOtpVerification";
import { Formik } from "formik";
import useOtpFormik from "./useOtpFormik";
import OtpVerificationForm from "./OtpVerificationForm";


const OtpScreen = (props) => {
    // const formik = useOtpFormik()
    // const {otpRefList, otp, handleTextChange} = formik;
    const { otpVerificationFormik } = useOtpFormik()
    // const { otpRefList, otp, handleTextChange } = useOtpVerification(props)
    return (
        <View style={styles.container}>
            <OtpVerificationForm {...otpVerificationFormik} />
        </View>
    )
}

export default OtpScreen;