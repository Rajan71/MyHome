import { Keyboard, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

const useCustomInput = (props: any) => {
    const { maxLength, nextRef, prevRef, onChangeText } = props;

    const handleTextChange = (text: string) => {
        onChangeText?.(text)
        if (text.length === maxLength) {
            if (nextRef?.current) {
                nextRef?.current?.focus()
            } else {
                Keyboard.dismiss()
            }
        }
        else if (text.length === 0) {
            prevRef?.current?.focus()
        }
    }

    const submitEditing = () => {
        if (nextRef?.current) {
            nextRef?.current?.focus()
        }
        else {
            Keyboard.dismiss();
        }
    }

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === 'BACKSPACE') {
            prevRef?.current?.focus()
        }
    }

    return {
        onChangeText: handleTextChange,
        submitEditing,
        onKeyPress: handleKeyPress
    }
}

export default useCustomInput;