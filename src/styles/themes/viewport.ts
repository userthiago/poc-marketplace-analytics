import { ViewportModel } from './models';

const viewports: ViewportModel = {
  xsmall: '450px',
  small: '640px',
  medium: '900px',
  large: '1024px',
  xlarge: '1200px',
} as const;

export default viewports;
