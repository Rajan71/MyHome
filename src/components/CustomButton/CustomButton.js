import React, { useEffect, useState } from "react";
import { View, Image, Text, ImageBackground, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import styles from "./CustomButtonStyles";

const CustomButton = ({ title, isLoading = false, disabled = false, onPressButton = () => { } }) => {
    return (
        <Pressable style={StyleSheet.flatten([styles.constainer, disabled && styles.disableButton])}
            disabled={disabled}
            onPress={onPressButton}>
            {isLoading ?
                <ActivityIndicator size={'small'} color={'#FFFF'} />
                : <Text style={styles.defaultButtonTxt}>{title}</Text>
            }
        </Pressable>
    )
}

export default CustomButton;