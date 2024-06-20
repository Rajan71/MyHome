type Keys =
    | 'gray'
    | 'pink'
    | 'organge'

type CommonKeys =
    | 'white'
    | 'black'
    | 'trnasparentBlack'

const themeColors: Record<Keys, string> = {
    gray: '#7B7B7B',
    pink: '#7B7B7B',
    organge: '#7B7B7B'
}

const commonColors: Record<CommonKeys, string> = {
    white: '#7B7B7B',
    black: '#7B7B7B',
    trnasparentBlack: '#7B7B7B'
}

type ThemeColors = Record<Keys, string> & Record<CommonKeys, string>

const light: ThemeColors = {
    ...themeColors,
    black: commonColors.black,
    white: commonColors.white,
    trnasparentBlack: commonColors.trnasparentBlack
}

const dark: ThemeColors = {
    ...themeColors,
    black: commonColors.black,
    white: commonColors.white,
    trnasparentBlack: commonColors.trnasparentBlack
}

export enum ThemeModeEnum {
    'light' = 'light',
    'dark' = 'dark',
    'system' = 'system',
}

export type ThemeMode = ThemeModeEnum.light | ThemeModeEnum.dark;

export default { dark, light }
