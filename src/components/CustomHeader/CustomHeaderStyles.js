import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils";


const styles =
    StyleSheet.create({
        headerView: {
            width: '100%',
            backgroundColor: '#5e6854',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: vw(20),
            paddingVertical: vh(15),
            alignItems: 'center'
        },
        headerTxt: {
            fontSize: vh(20),
            fontWeight: 'bold',
            color: '#FFFF'
        }

    })


export default styles;