/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ThemeModel } from './themes/models';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
