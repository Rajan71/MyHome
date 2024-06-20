import React from "react";
import { View } from 'react-native';
import styleSheet from './ProfileStyles'

import { CustomHeader, PushNotification } from "../../components";
import { vh } from "../../utils";
import { useTheme } from "../../hooks";


const ProfileScreen = () => {
    const { styles, theme } = useTheme(styleSheet)
    return (
        <View style={styles.container}>
            <PushNotification />
            <CustomHeader
                title={`Profile`}
                onPressBack={() => { }} />

        </View>
    )
}

export default ProfileScreen;