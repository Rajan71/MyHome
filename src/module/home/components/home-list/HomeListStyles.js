import { StyleSheet } from "react-native"
import { vh, vw } from "../../../../utils";


const styles =
    StyleSheet.create({
        listView: {
            paddingVertical: vh(10),
            marginHorizontal: vw(20),
            borderRadius: vh(20),
            backgroundColor: '#FFFF',
            alignItems: 'center',
            shadowOffset: {
                width: 0,
                height: vh(2)
            },
            shadowOpacity: 0.2,
            shadowRadius: vh(3),
            paddingHorizontal: vw(15),
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        listContainer: {
            marginBottom: vh(60)
        },
        txtContainer: {
            paddingRight: vw(20),
            flex: 1
        },
        homeIcon: {
            height: vh(100),
            width: vw(80),
            borderRadius: vh(25)
        }

    })


export default styles;