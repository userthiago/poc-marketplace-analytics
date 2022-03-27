export interface ColorsModel {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryFontColor: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;

  background: string;
  backgroundLight: string;
  backgroundDark: string;
  disabled: string;
  disabledFontColor: string;

  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
}

export interface ThemeModel {
  name: string;
  colors: ColorsModel;
}
