import { I18n } from "../translations";


interface KeyStringValueMap {
    [key: string]: string;
}

const freezeStringsObject = <T extends KeyStringValueMap>(strings: T): T => Object.freeze(strings)

const Profile = freezeStringsObject({
    title: I18n.t('profile:title'),
    details: I18n.t('profile:details')
})

const Home = freezeStringsObject({
    title: I18n.t('home:title'),
    details: I18n.t('home:details')
})

export default Object.freeze({
    Profile,
    Home
})