import React, { useState } from "react";
import { View, Text, Pressable, Image, ImageBackground } from 'react-native';
import styles from "./HomeDetailStyles";
import Icon from 'react-native-vector-icons/Ionicons'
import { Images } from "../../assets";
import { goBack, vh, vw } from "../../utils";
import { CustomButton, showToast } from "../../components";


const HomeDetailScreen = (props) => {
    const route = props?.route?.params?.home
    const [loading, setLoading] = useState(false)
    const onPressUnlock = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            showToast({ message: 'Congratulations, your home is unlocked !', isError: false })
        }, 1000)
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.myHome} style={styles.headerView} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: vw(20), marginTop: vh(20) }}>
                    <Pressable hitSlop={vh(10)} style={{ flex: 1 }}
                        onPress={() => goBack()}>
                        <Icon name={'arrow-back'} size={vh(25)} color={'#5e6854'} />
                    </Pressable>
                    <View style={{ flex: 1 }} />
                </View>
            </ImageBackground>

            <View style={styles.txtContainer}>
                <Text style={styles.nameTxt}>{`${`Name: `}${route?.name}`}</Text>
                <Text style={styles.listTxt}>{`${`Gender: `}${route?.gender}`}</Text>
                <Text style={styles.listTxt}>{`${`Age: `}${route?.age}`}</Text>
                <Text numberOfLines={2} style={styles.listTxt}>{`${`Address: `}${route?.address}`}</Text>
                <Text numberOfLines={2} style={styles.listTxt}>{`${`Distance: `}${route?.distance} m`}</Text>
                {route?.distance <= 30 ? <CustomButton title={`Unlock`}
                    isLoading={loading}
                    onPressButton={onPressUnlock} /> : null}
            </View>



        </View>
    )
}

export default HomeDetailScreen;