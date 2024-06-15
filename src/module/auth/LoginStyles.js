import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils";


const styles =
    StyleSheet.create({
        container: {
            flex: 1
        },
        headerView: {
            height: vh(250), width: '100%'
        },
        innerView: {
            marginHorizontal: vw(20),
            marginTop: vh(24)
        },
        titleText: {
            fontSize: vh(24),
            fontWeight: 'bold',
            marginTop: vh(20),
            paddingLeft: vw(20)
        }
    })


export default styles;