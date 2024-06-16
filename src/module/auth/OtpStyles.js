import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils";


const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        formInputContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            gap: vw(6),
            justifyContent: 'space-between',
        }
    })


export default styles;