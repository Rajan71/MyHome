import React, { useRef, useState, createContext, useContext, RefObject, useEffect } from "react";
import { TextInput } from "react-native";

const useOtpVerification = (props) => {
    const otpRefList = useRef<Array<RefObject<TextInput>>>(Array.from({ length: 6 }, () => React.createRef<TextInput>()))
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [counter, setCounter] = useState<number>(45);
    const [otp, setOtp] = useState<string[]>([])

    useEffect(() => {
        if (counter === 0) {
            if (intervalRef?.current) {
                clearTimeout(intervalRef?.current)
            }
            return;
        }
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => {
                const newCounter: number = prevCounter - 1
                if (newCounter === 0 && intervalRef.current) {
                    clearInterval(intervalRef.current)
                }
                return newCounter;
            })
        }, 1000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [counter])

    const resendOtp = () => {
        setCounter(45)
        //Api call
    }

    const handleTextChange = (index: number) => (text: string) => {
        const otpTemp: string[] = [...otp];
        otpTemp[index] = text;
        setOtp(otpTemp);
        props?.handleChange('otp')(otpTemp?.join(''))
    }

    return {
        counter,
        resendOtp,
        otp,
        otpRefList: otpRefList.current,
        handleTextChange
    }
}

export default useOtpVerification;

