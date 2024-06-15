import Toast from 'react-native-toast-message';

const showToast = ({ isError, message }) => {
    return (
        Toast.show({
            type: isError ? 'error' : 'success',
            text1: message,
            position: 'top',
            topOffset: 0
        })
    )
}

export default showToast