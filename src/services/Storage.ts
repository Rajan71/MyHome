import { Platform } from "react-native";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
    id: Platform.OS === 'web' ? 'mmkv.default' : 'MyHome-storage',
    encryptionKey: Platform.OS === 'web' ? undefined : 'MyHome'
})

export const reduxStorage = {
    setItem: (key: string, value: any) => {
        storage.set(key, value)
        return Promise.resolve(true)
    },
    getItem: (key: string) => {
        const value = storage.getString(key)
        return Promise.resolve(value)
    },
    removeItem: (key: string) => {
        storage.delete(key)
        return Promise.resolve()
    }
}