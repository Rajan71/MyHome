import { StyleSheet } from "react-native"
import { vh, vw } from "../../utils";
import { Colors, ThemeMode } from "../../theme";


const styles = (theme: ThemeMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F7FB'
        },
        headerView: {
            width: '100%',
            backgroundColor: Colors[theme].gray,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: vw(20),
            paddingVertical: vh(15),
            alignItems: 'center'
        },
        headerTxt: {
            fontSize: vh(20),
            fontWeight: 'bold',
            color: Colors[theme].white
        }

    })




export default styles;