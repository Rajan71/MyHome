import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './CustomInputStyles'
import { vh } from "../../utils";
import Icon from 'react-native-vector-icons/Feather'
import useCustomInput from "./useCustomInput";

const CustomInput = (props) => {
    const {
        title, value, onChangeText = () => { }, placeholder,
        isIconShown = false, error,
        returnKeyType,
        inputRef,
        autoCapitalize,
        secureTextEntry,
        onSubmitEditing,
        ...rest
    } = props
    const [visibleIcon, setVisibleIcon] = useState(false)
    const { submitEditing, onKeyPress } = useCustomInput(props)
    return (
        <>
            <Text>{title}</Text>
            <View style={styles.container}>
                <TextInput
                    ref={inputRef}
                    style={styles.inputStyle}
                    value={value}
                    returnKeyType={returnKeyType}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    autoCapitalize={autoCapitalize}
                    onSubmitEditing={onSubmitEditing ?? submitEditing}
                    secureTextEntry={(secureTextEntry && !visibleIcon) ? true : false}
                    onKeyPress={onKeyPress}
                    {...rest} />
                {!!isIconShown && <Pressable
                    onPress={() => setVisibleIcon(!visibleIcon)}>
                    <Icon name={!visibleIcon ? `eye-off` : 'eye'} size={vh(20)} />
                </Pressable>}
            </View>
            {!!error && <Text style={{ marginTop: vh(4), color: 'red' }}>{`error`}</Text>}
        </>
    )
}

export default CustomInput;