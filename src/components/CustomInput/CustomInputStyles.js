import { StyleSheet } from "react-native"
import { scale, vh, vw } from "../../utils";

const styles =
    StyleSheet.create({
        container: {
            borderWidth: vh(1),
            borderColor: '#D5DBE9',
            height: vh(46),
            marginTop: vh(5),
            width: '10%',
            borderRadius: vh(6),
            backgroundColor: '#F8F9FC',
            paddingHorizontal: vw(16),
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        inputView: {
            paddingLeft: 10,
            height: vh(46)
        },
        inputStyle: {
            flex: 1,
            fontSize: vh(14)
        }
    })


export default styles;