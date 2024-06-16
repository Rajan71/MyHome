import React, { useRef, useState, createContext, useContext, ForwardedRef, RefObject } from "react";
import { View, Image, Text, TextInput } from 'react-native';
import useOtpVerification from "./useOtpVerification";
import styles from "./OtpStyles";
import { CustomInput } from "../../components";

const InputOtp = ({ autoFocus, value, onChangeText, nextRef, prevRef, styles }: any, ref: ForwardedRef<TextInput>) => {
    return (
        <CustomInput
            autoFocus={autoFocus}
            inputRef={ref}
            value={value}
            maxLength={1}
            kevboardType="number-pad"
            nextRef={nextRef}
            prevRef={prevRef}
            onChangeText={onChangeText} />
    )
}

const OtpVerificationForm = (props: any) => {
    const { values, errors, handleSubmit } = props;
    const { otpRefList, otp, handleTextChange } = useOtpVerification(props)
    return (
        <View style={styles.formInputContainer}>
            {otpRefList?.map((item: RefObject<TextInput>, index: number) => {
                return (
                    <InputOtp
                        autoFocus={index === 0}
                        key={index}
                        ref={item}
                        value={otp[index]}
                        prevRef={otpRefList[index - 1]}
                        nextRef={otpRefList[index + 1]}
                        styles={styles}
                        onChangeText={handleTextChange} />
                )
            })}
        </View>

    )
}

export default OtpVerificationForm;