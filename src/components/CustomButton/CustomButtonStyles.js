import { StyleSheet } from "react-native"
import { scale, vh, vw } from "../../utils";

const styles =
    StyleSheet.create({
        constainer: {
            alignItems: 'center',
            borderRadius: vh(26),
            paddingVertical: vh(14),
            marginTop: vh(34),
            backgroundColor: '#5e6854'
        },
        defaultButtonTxt: {
            color: '#FFFF',
            fontSize: vh(16),
            textAlign: 'center',
            fontWeight: 'bold'
        },
        disableButton: {
            backgroundColor: '#99ad83'
        }
    })


export default styles;