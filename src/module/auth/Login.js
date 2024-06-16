import React, { useRef, useState, createContext, useContext } from "react";
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './LoginStyles'
import { Images } from "../../assets";
import { CustomButton, CustomInput, showToast } from "../../components";
import { vh } from "../../utils";
import HomeContext from "../../context/HomeContext";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('admin123@gmail.com')
    const [password, setPassword] = useState('Admin@123')
    const [loading, setLoading] = useState(false)
    const passwordRef = useRef()
    const isDisabled = !email || !password
    const { setValue } = useContext(HomeContext);

    const onPressLogin = () => {
        let validEmail = 'admin123@gmail.com'
        let validPassword = 'Admin@123'
        if (email == validEmail && password == validPassword) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setValue(true)
                navigation?.navigate('HomeScreen')
            }, 1000)

        }
        else {
            showToast({ message: email != validEmail ? 'Email is invalid.' : 'Password is invalid.', isError: true })
        }
    }
    return (
        <View style={styles.container}>
            <Image source={Images.myHome} style={styles.headerView} resizeMode="cover" />
            <ScrollView>
                <Text style={styles.titleText}>{`Log in to your account`}</Text>
                <View style={styles.innerView}>

                    <CustomInput
                        title={'Email'}
                        value={email}
                        placeholder={`Enter your email`}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        onChangeText={(val) => {
                            const inputValue = val.replace(/\s/g, '');
                            setEmail(inputValue)
                        }}
                        onSubmitEditing={() => {
                            passwordRef?.current?.focus()
                        }} />
                    <View style={{ marginTop: vh(20) }}>
                        <CustomInput
                            inputRef={passwordRef}
                            isIconShown
                            secureTextEntry
                            title={'Password'}
                            value={password}
                            returnKeyType={'done'}
                            placeholder={`Enter your password`}
                            onChangeText={(val) => setPassword(val)} />
                    </View>
                    <CustomButton
                        title={`Log In`}
                        disabled={isDisabled}
                        isLoading={loading}
                        onPressButton={onPressLogin} />
                </View>
            </ScrollView>

        </View>
    )
}

export default Login;