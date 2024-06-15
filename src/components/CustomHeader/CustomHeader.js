import React from "react";
import { View, Text, Pressable } from 'react-native';
import styles from './CustomHeaderStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import { vh } from "../../utils";



const CustomHeader = ({ title, onPressBack = () => { } }) => {
    return (
        <View style={styles.headerView}>
            <Pressable hitSlop={vh(10)} style={{ flex: 1 }}
                onPress={onPressBack}>
                <Icon name={'arrow-back'} size={vh(25)} color={'#FFFF'} />
            </Pressable>
            <Text style={styles.headerTxt}>{title}</Text>
            <View style={{ flex: 1 }} />
        </View>
    )

}

export default CustomHeader;