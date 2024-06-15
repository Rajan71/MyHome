import React from "react";
import { View } from 'react-native';
import styles from "./HomeStyles";
import { HomeList } from "./components";
import { CustomHeader, PushNotification } from "../../components";
import { vh } from "../../utils";


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PushNotification />
            <CustomHeader
                title={`Homes`}
                onPressBack={() => navigation?.goBack()} />
            <View style={{ marginTop: vh(10) }}>
                <HomeList />
            </View>

        </View>
    )
}

export default HomeScreen;