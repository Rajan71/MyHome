import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils";


const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F7FB'
        },
        headerView: {
            height: vh(250), width: '100%'
        },
        headerTxt: {
            fontSize: vh(20),
            fontWeight: 'bold',
            color: '#FFFF'
        },
        txtContainer: {
            flex: 1,
            marginHorizontal: vw(20), flex: 1, marginTop: vh(20)
        },
        nameTxt: {
            fontSize: vh(12),
            fontWeight: '600',
        },
        listTxt: {
            fontSize: vh(12),
            fontWeight: '600',
            marginTop: vh(8)
        },

    })


export default styles;