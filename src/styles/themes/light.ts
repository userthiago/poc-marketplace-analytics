import { ColorsModel, ThemeModel } from './models';
import viewports from './viewport';

const colors: ColorsModel = {
  primary: '#343A40',
  primaryLight: '#495057',
  primaryDark: '#212529',
  primaryFontColor: '#FFFFFF',
  secondary: '#FFA200',
  secondaryLight: '#FFC300',
  secondaryDark: '#FF8800',

  background: '',
  backgroundLight: '',
  backgroundDark: '',
  disabled: '#DEE2E6',
  disabledFontColor: '#6C757D',

  white: '#FFFFFF',
  gray100: '#F8F9FA',
  gray200: '#E9ECEF',
  gray300: '#DEE2E6',
  gray400: '#CED4DA',
  gray500: '#ADB5BD',
  gray600: '#6C757D',
} as const;

const themeLight: ThemeModel = {
  name: 'light',
  colors,
  viewports,
};

export default themeLight;
